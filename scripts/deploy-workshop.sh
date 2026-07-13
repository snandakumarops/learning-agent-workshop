#!/bin/bash
set -e
cd "$(dirname "$0")/.."

TARGET_ORG="${1:-}"
if [ -z "$TARGET_ORG" ]; then
  echo "Usage: $0 <target-org-alias-or-username>"
  exit 1
fi

echo ""
echo "=== [1/5] Building short workshop (React app) ==="
cd workshop-react && npm run build && cd ..
rm -rf force-app/main/default/staticresources/workshop_guide
cp -r workshop-react/dist force-app/main/default/staticresources/workshop_guide
echo "React build ready -> staticresources/workshop_guide"

echo ""
echo "=== [2/5] Staging extended workshop (docs/extended static HTML) ==="
# Static resources are capped at 5MB, so we use the optimized JPGs from the
# React app's public/images (not the large PNG originals in docs/images) and
# rewrite the extended HTML's image extensions to .jpg. Only referenced images
# are kept.
SR_EXT="force-app/main/default/staticresources/workshop_guide_extended"
rm -rf "$SR_EXT"
mkdir -p "$SR_EXT/extended" "$SR_EXT/images"
cp docs/extended/*.html "$SR_EXT/extended/"
perl -0pi -e 's{(\.\./images/[A-Za-z0-9._-]+?)\.(png|jpeg|jpg|gif|svg)}{$1.".jpg"}ge' "$SR_EXT/extended/"*.html
cp workshop-react/public/images/* "$SR_EXT/images/"
# Prune images not referenced by the extended pages
grep -rhoE '\.\./images/[A-Za-z0-9._-]+' "$SR_EXT/extended/"*.html | sed 's#\.\./images/##' | sort -u > /tmp/_ext_refs.txt
for img in "$SR_EXT/images"/*; do
  base=$(basename "$img")
  grep -qx "$base" /tmp/_ext_refs.txt || rm "$img"
done
echo "Extended content ready -> staticresources/workshop_guide_extended ($(du -sh "$SR_EXT" | cut -f1))"

echo ""
echo "=== [3/5] Deploying to $TARGET_ORG ==="
sf project deploy start \
  --source-dir force-app/main/default/staticresources \
  --source-dir force-app/main/default/pages \
  --source-dir force-app/main/default/sites \
  --target-org "$TARGET_ORG" \
  --wait 15

echo ""
echo "=== [4/5] Granting guest profile access (both sites) ==="
sf apex run \
  --file scripts/grant-guest-access-all.apex \
  --target-org "$TARGET_ORG" || true

echo ""
echo "=== [5/5] Fetching site URLs ==="
INSTANCE_URL=$(sf org display --target-org "$TARGET_ORG" --json | python3 -c "import sys,json; print(json.load(sys.stdin)['result']['instanceUrl'])")

# Base sites host is the instance host with .my.salesforce.com -> .my.salesforce-sites.com
# (works for both scratch *.scratch.my... and dev *.develop.my... hosts)
BASE=$(echo "$INSTANCE_URL" | sed 's/\.my\.salesforce\.com/.my.salesforce-sites.com/')

get_prefix () {
  local site_name="$1"
  sf data query \
    --query "SELECT UrlPathPrefix FROM Site WHERE Name='$site_name' LIMIT 1" \
    --target-org "$TARGET_ORG" --json 2>/dev/null \
  | python3 -c "
import sys,json
r=json.load(sys.stdin)
recs=r.get('result',{}).get('records',[])
print((recs[0].get('UrlPathPrefix') or '') if recs else '')
" 2>/dev/null || echo ""
}

SHORT_PREFIX=$(get_prefix "Workshop")
EXT_PREFIX=$(get_prefix "WorkshopExtended")

# Build stable (timestamp-less) static-resource URLs. A path prefix, if set,
# is inserted before /resource.
short_seg=""; [ -n "$SHORT_PREFIX" ] && short_seg="/$SHORT_PREFIX"
ext_seg="";   [ -n "$EXT_PREFIX" ]   && ext_seg="/$EXT_PREFIX"

SHORT_URL="${BASE}${short_seg}/resource/workshop_guide/index.html"
EXT_URL="${BASE}${ext_seg}/resource/workshop_guide_extended/extended/index.html"

echo ""
echo "=================================================="
echo "  SHORT (Vibes)        : $SHORT_URL"
echo "  EXTENDED (instructions): $EXT_URL"
echo "  Org                  : $INSTANCE_URL"
echo "=================================================="
echo ""
echo "Point sfdc.co/almworkshopVibes        -> SHORT url above"
echo "Point sfdc.co/almworkshopinstructions -> EXTENDED url above"

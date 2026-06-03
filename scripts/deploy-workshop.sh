#!/bin/bash
set -e
cd "$(dirname "$0")/.."

TARGET_ORG="${1:-}"
if [ -z "$TARGET_ORG" ]; then
  echo "Usage: $0 <target-org-alias-or-username>"
  exit 1
fi

echo ""
echo "=== [1/4] Building React app ==="
cd workshop-react && npm run build && cd ..
rm -rf force-app/main/default/staticresources/workshop_guide
cp -r workshop-react/dist force-app/main/default/staticresources/workshop_guide
echo "React build ready"

echo ""
echo "=== [2/4] Deploying to $TARGET_ORG ==="
sf project deploy start \
  --source-dir force-app/main/default/staticresources \
  --source-dir force-app/main/default/pages \
  --source-dir force-app/main/default/sites \
  --target-org "$TARGET_ORG" \
  --wait 15

echo ""
echo "=== [3/4] Granting guest profile access ==="
sf apex run \
  --file scripts/grant-guest-access.apex \
  --target-org "$TARGET_ORG" || true

echo ""
echo "=== [4/4] Fetching site URL ==="
INSTANCE_URL=$(sf org display --target-org "$TARGET_ORG" --json | python3 -c "import sys,json; print(json.load(sys.stdin)['result']['instanceUrl'])")

SITE_INFO=$(sf data query \
  --query "SELECT Id, Name, UrlPathPrefix FROM Site WHERE Name='Workshop' LIMIT 1" \
  --target-org "$TARGET_ORG" \
  --json 2>/dev/null || echo '{}')

PATH_PREFIX=$(echo "$SITE_INFO" | python3 -c "
import sys,json
r=json.load(sys.stdin)
records=r.get('result',{}).get('records',[])
print(records[0].get('UrlPathPrefix','Workshop') if records else 'Workshop')
" 2>/dev/null || echo "Workshop")

BASE=$(echo "$INSTANCE_URL" | sed 's/\.my\.salesforce\.com/.my.salesforce-sites.com/')
SITE_URL="${BASE}/${PATH_PREFIX}"

echo ""
echo "=============================="
echo "  Workshop URL : $SITE_URL"
echo "  Org          : $INSTANCE_URL"
echo "=============================="
echo ""
open "$SITE_URL" 2>/dev/null || true

# Facilitator Feedback — Workbook Change Checklist

Source: video walkthrough `App & Agent Exercise Updates.mp4` (~10.5 min), the facilitator reviewing the **Extended (Full) workbook** against the AAHD deck.

Scope of this branch (`feedback/workshop-updates`): **only the items the facilitator called out.** Broader deck-alignment enhancements are deferred to a separate branch after this is approved.

Each item applies to **both** workbook sources unless noted:
- Extended: `docs/extended/*.html`
- Mini (React): `workshop-react/src/pages/*.jsx`

Legend — **Type**: `FIX` = clear change · `VERIFY` = confirm behavior first · `DECISION` = needs a call (often PMM/framing) · `OOS` = out of scope for this branch.

---

## Triage outcomes & decisions (recorded for the handback doc)

- **B3** — RESOLVED / no action. No permission-assignment step exists anywhere in the current workbook; the facilitator reviewed an older version. *(feedback-for-the-feedback)*
- **C3** — RESOLVED. The saved dashboard screenshot IS used (pasted into the Build prompt to mark widget placement). Keep it; optionally clarify the linkage. The facilitator was mistaken. *(feedback-for-the-feedback)*
- **F1** — DECIDED: **Einstein IS required** (Jackie tested). Keep the Enable Einstein step; no change. *(feedback-for-the-feedback: The facilitator believed it wasn't needed — confirmed it is)*
- **G1** — DECIDED: **Remove Lightning Preview** (always breaks). → FIX.
- **H1** — DECIDED: **leave promote-to-prod as-is (DX Inspector)** for this branch. Log as OUTSTANDING QUESTION in handback (deck p.167 shows agent working inside DX Inspector/DevOps Center pipeline, not clearly "Vibes does the promote").
- **I1** — RESOLVED to FIX: Agentforce Vibes doc link is **404**; replace with `https://help.salesforce.com/s/articleView?id=sf.agentforce_vibes.htm`. DevSecOps Guide + Change Management links verified 200. DevSecOps (not DevOps) is correct per deck p.71.
- **E3** — CONFIRMED → FIX: team-path demo button is a bare "Launch the Demo" (Navattic link) with no DevOps Center / new-tab callout.
- **E2** — APPROVED (deck-backed): rename to **Solo** (not "Solo Admin") and **Coordinated** (not "Team").
- **C1** — APPROVED: rename "Hands-On / Inspect the App" → **"Application Overview"** (the facilitator's own suggested wording, ~[03:34]).
- **A1/A2/A4** — DECIDED: **minimal consistency fix now**; document the fuller reframe option in handback.
- **A5** — CORRECTED: "10 min" is the **Setup** section time, not Overview. Overview time badge → **~4 hours** (whole workshop, per deck). Move the 10-min note to Setup.
- **Paths model (A2)** — DONE (upgraded from Option A): built the full **2×2 framing** on the Overview — "How you work" (Solo / Coordinated) + "How you develop" (Human Driven / Agent Driven), deck-worded (p.20), closing with "focuses on the Solo, Coordinated, and Agent Driven paths." Also **removed the `agent-app-dev-lifecycle` diagram** (decorative, not referenced/used on the page). Applied to both sources, deployed & verified on staging.
- **A1/A5/A4/B2-ripple** — DONE on Overview: intro reworded (no "two scenarios"); time badge → ~4 hours; agenda labels → Solo / Agent Driven; removed "enable Change Management" from Before-the-session bullet.
- **Sidebar naming (E2/C1)** — the Extended sidebar is duplicated in all 12 `docs/extended/*.html` files. Rename group titles **per-section as we reach each** (across all 12 files at that time): "Solo Admin Path"→"Solo" (at Solo section), "Team Path"→"Coordinated" (at Coordinated), "AI-Accelerated Path"→"Agent Driven" (at Agent-Driven), "Hands-On"→"Application Overview" (at Inspect/C1). Overview needs no sidebar change.
- **Screenshot backlog** — C2 (OPEN): Inspect list-view screenshots show only ID field; fixing requires changing workshop-org data + cutting a new org template + updating OrgFarm — tracked separately. F3 (DONE): AFV Vibes UI screenshots already refreshed for Vibes 2.0 — the feedback was against a pre-2.0 workbook.
- **PARKED for handback (open items, not workbook edits):**
  - **A3** — the facilitator wants the CEE scenario + the two task requests moved OUT of Overview into the individual sections ("gets people off track"). Currently still on Overview. Revisit when we reach Inspect/Application Overview; if not done, log as open item in handback.
  - **Agenda completeness (A4)** — Facilitator: *if* we keep the Overview agenda it must cover everything incl. Coordinated (team) path + Governance. Currently lists only Solo + Agent-Driven steps. Since the workbook has no Coordinated/Governance hands-on content, don't fake it — PARKED as open item for team (options: complete it, drop the agenda, or leave). Log in handback.
  - **Beyond-the facilitator enhancements (log as "chosen enhancements," not the facilitator asks):** the 2×2 Overview rebuild and removal of the lifecycle diagram were Jackie's calls; the facilitator's bar was only "make consistent or skip."
- **SCOPE (updated)** — from Setup onward, edit **Extended only** (`docs/extended/*.html`). Mini (`workshop-react`) is untouched until a dedicated **Mini reconciliation pass** at the end: diff every Extended change and mark applies / already-done / N/A for Mini. NOTE: Overview was already edited in BOTH sources before this scope change — mark "Overview already ported" in the Mini pass.
- **Setup timing** — DECIDED: use **10 minutes** (the facilitator's number), even though the page shrank to 4 steps.
- **Setup — DONE (Extended)**: badge→10 min; removed Change Management block (B2); removed MCP activation section (B4, held for AFV Walkthrough re-insertion); closing line updated. Now 4 steps. Deployed & verified on staging. Mini pending reconciliation (Mini had no CM step; MCP move still applies).
- **B4 carryover** — MCP activation block must be RE-INSERTED into AFV Walkthrough (afv-walkthrough.html) with B5 sandbox warning. Content recoverable from git history / Mini SetupPage.jsx. DO NOT lose.
- **Inspect the App — DONE (Extended)**: C1 sidebar group "Hands-On"→"Application Overview" across all 12 files (page title/link kept as "Inspect the App" to avoid duplicate labels); C3 no change (callout already explains later use — satisfied); A3 parked; C2 → screenshot backlog. Deployed & verified.
- **Solo path — DONE (Extended)**: D2 add-picklist 12→10 min (promote-picklist already 10); D1 "what you'll do in the Solo path" intro added atop add-picklist; E2 sidebar "Solo Admin Path"→"Solo" across 12 files. E1 numbering = NOT a Solo item (the facilitator's comment was re: Team path; Solo numbering already clean). Deployed & verified.
- **E1 numbering — DONE (Extended, all 12 files)**: removed step numbers everywhere they appear (sidebar links, pager Next/Prev titles, 3 page `<title>` tags). In-exercise step-num circles kept. Deployed & verified.
- **Timing dig (confirmed)**: the facilitator said "10 minutes" for exactly TWO spots — Setup (was 7) and Solo (add-picklist was 12). Applied to only those; NOT uniform. Coordinated (5 min) and all other pages keep existing times.
- **Coordinated path — DONE (Extended)**: E2 "Team Path"→"Coordinated" (page h1/title "Coordinated Development"; sidebar group "Coordinated"; link "Coordinated Development" x12; both pager refs). E3 demo button→"Launch the DevOps Center Demo" + DevOps Center lead-in in card. Deferred (Option a): body "solo admin / AI-accelerated developer" cross-ref — sweep during AI section. Deployed & verified.
- **Coordinated body bug — FIXED**: original text claimed "You've seen what a solo admin and an AI-accelerated developer can do" but order is Solo→Coordinated→Agent-Driven, so AI hadn't been seen yet. Corrected to reference Solo only (both the "you've seen" line and the "solo and AI-accelerated paths" line). Deployed & verified.
- **E3 demo link — OPEN ITEM (not ours to fix / feedback-for-feedback)**: workbook already links the exact correct Navattic URL (`...g=cmng53ok400bz04l12cb61whe&s=0`). Clicking it redirects — on Navattic's side — to a DIFFERENT guide (`...g=cmng53ok400bw04l1adnd9zav`). Not fixable via workbook edit; needs Navattic project reconfig or a corrected share link. LOG IN HANDBACK.
- **E3 demo clarity — DONE**: root cause is the demo landing page shows 3 identical path cards, each with a "Click-through demos" button — people didn't know which to pick. Added callout text ("find the DevOps Center card and click Click-through demos") + embedded a real screenshot `devops-center-card.jpg` (public/images/) of that card. Deployed & verified (img resolves HTTP 200). NOTE: this screenshot is real, not a backlog placeholder; will drift if Navattic UI changes.
- **Agent-Driven section — DONE (Extended)**:
  - afv-walkthrough: B4 MCP activation re-inserted as steps 1-3 (top, before Einstein); B5 sandbox warning strengthened w/ MCP-in-sandbox line; renumbered 1-14; F1 Einstein kept (required); E2 sidebar "AI-Accelerated Path"→"Agent Driven" (12 files).
  - build-leaderboard: G1 Lightning Preview step removed (ends at Deploy-to-sandbox → Verify).
  - troubleshooting (G1 ripple): heading "Lightning Preview and Testing Issues"→"Testing and Display Issues"; removed port-conflicts bullet; kept AI-randomness + DevTools items.
  - promote-to-prod: H1 left as-is (DX Inspector) — OPEN QUESTION in handback.
  - Screenshot backlog: build-preview-complete now unused (auto-pruned); F3 afv Vibes UI screenshots (Plan mode, Let's Vibe, MCP expanded) need recapture.
  - Deployed & verified.
- **Consistency sweep — DONE (Extended)**: replaced stale "Part 1/Part 2" framing with path names (promote-picklist: "In the Agent Driven path..." + "Solo path complete" callout; promote-to-prod: "connected during the Solo path"). Verified clean: no old path names, no "~2 hours", all 12 internal links resolve, titles consistent. Change Management/MCP references that remain are all legitimate (DX Inspector UI, Vibes behavior, troubleshooting). Deployed & verified.
- **Dependency note — RESOLVED (not an issue)**: earlier worry that Mini promote-to-prod depended on a prod connection made during Solo. Confirmed the Solo promote establishes nothing setup-wise that the Mini deploy needs — Mini deploy works on its own. Removed from handback open questions.
- **A4 agenda — DONE (Extended, un-parked)**: restructured Overview agenda into 4 groups matching sidebar (Application Overview / Solo / Coordinated / Agent Driven). Inspect moved to Application Overview (was mis-filed under Agent Driven); Coordinated added (was missing); numbering restarts per path (kills misleading 1-7); times corrected (Add Deferred 12→10, Verify 5→2); distinct chip colors added (.overview grey, .coordinated purple). GOVERNANCE omitted — no page exists in workbook (deck-only); LOG as open/fuller-redo item in handback.
- **Mini badge revert — DONE**: Mini IndexPage was bumped to ~4h during the pre-scope Overview edit; reverted to original ~2h (Mini is the smaller session). NOTE for Mini pass: deck says Agent-Driven single session is ~1-1.5h — Jackie to decide if ~2h should become ~1.5h.
- **MINI SCOPE — DECIDED: Agent-Driven-only.** Mini routes = Index, Setup, Inspect, AFV, Build, Deploy-Verify, Promote-to-prod, What's Next, Troubleshooting (NO Solo/Coordinated pages or routes). So Mini content must reflect ONLY Application Overview + Agent Driven. Mini sidebar is a single shared `components/Layout.jsx` (not 12 copies). Mini currently half-updated: agenda got the EARLY overview-era edit (old 1-7); sidebar untouched ("HANDS-ON"/"BUILD FLOW", numbered links). Reconciliation must: agenda→Application Overview + Agent Driven only; sidebar→rename "Hands-On"→"Application Overview", "Build Flow"→"Agent Driven", de-number links; badge already reverted to ~2h (deck says ~1.5h — Jackie to decide).
- **MINI RECONCILIATION — DONE (Agent-Driven-only)**: IndexPage scenario dropped Deferred/Solo task (keep Leaderboard); 2×2 refocused ("focuses on the Agent Driven path"); agenda = Application Overview + Agent Driven only (Solo group removed), per-group numbering, times fixed; badge ~2h. Layout sidebar: "Hands-On"→"Application Overview", "Build Flow"→"Agent Driven", links de-numbered. SetupPage: MCP removed, 4 steps, 10 min. AfvWalkthroughPage: MCP added steps 1-3, warning strengthened, renumbered 1-14. BuildLeaderboardPage: Lightning Preview removed. TroubleshootingPage: heading→"Testing and Display Issues", port-conflict bullet removed. PromoteToProdPage: "Part 1"→"connected earlier" (neutral). Built + deployed + verified in bundle.
- **Mini items — RESOLVED**: (1) standalone-deploy concern — not an issue (see above). (2) 3 orphan pages — repo-owner cleanup, removed from handback. (3) Mini badge — set to 1–1.5 hours per deck (source of truth); removed from handback open questions.
- **J1 pager bug — DONE (both sites)**: whats-next Next→Troubleshooting (was →Overview); troubleshooting Prev→What's Next + Next button removed (was both →Overview). Mini same fix + de-numbered "6. Promote" label. Deployed & verified.
- **I1 dead link — DONE (both sites)**: replaced 404 Vibes doc URL with `https://help.salesforce.com/s/articleView?id=sf.agentforce_vibes.htm` (verified 200) in whats-next (Extended) + WhatsNextPage (Mini).
- **Handback deliverable** — produce a shareable **HTML** at the end: (1) summarized steps, (2) verify/decisions made, (3) feedback-for-the-feedback + open questions (incl. H1).
- **DATA GOVERNANCE LAB — DONE (Extended only)**: NEW page `docs/extended/data-governance.html` — "Working with Policies in Data Mask & Seed" (deck slide 65, 15 min), the last publish blocker per facilitator. Section sits between Agent Driven and Wrap Up. Added Data Governance sidebar group to all 13 pages; pager rewired (promote-to-prod NEXT → data-governance; whats-next PREV → data-governance); Overview agenda gained a Data Governance group (.governance chip). Prominent sandbox-only/irreversible warning + prerequisite callout. Deployed & verified on staging. Later reconciled against the ORIGINAL canvas PDF (Lab_ Working with Policies...): added sandbox-confirm line to prereq, Email-library precision, richer Using Libraries note, "masked values replace original data" to danger note, a Summary recap section, and embedded the production "Run Now unavailable" tooltip screenshot (datamask-run-sandbox-only.jpg). All verified. Handback updated (new section added; "Governance in agenda" removed from parking lot). Mini NOT changed (Agent-Driven-only, governance out of scope). Source: data-mask-integration-handoff.md.

---

## A. Overview / Intro framing

- [ ] **A1 · `DECISION`** — Overview says "two development scenarios." That framing is outdated; the model is now Solo/Coordinated × Human/Agent Driven + Governance. Either make it consistent with the deck or drop it (it's covered in the slides). *(index)* — [00:12]
- [ ] **A2 · `DECISION`** — "3 application development paths… covers two of them" is wrong — there are 4 in total, framed as *how you work* (Solo/Coordinated) and *how you develop* (Human/Agent Driven). Make consistent or skip. *(index)* — [00:49]
- [ ] **A3 · `FIX`** — Move the scenario/task detail (Connected Executive Education + the specific tasks) **out of the overview** and into the individual sections (e.g., Inspect the App). Up-front detail gets people off track. *(index → inspect-app)* — [00:29]
- [ ] **A4 · `DECISION`** — If we keep an agenda in the workbook, it must cover **everything** in the real agenda, including the Coordinated (team) path **and** the Governance piece. Otherwise drop the agenda framing. *(index)* — [01:35]
- [ ] **A5 · `FIX`** — Overview time estimate: change to **10 minutes** (from 7). *(index)* — [01:50]

## B. Setup / Environment Prep

- [ ] **B1 · `FIX` (keep)** — Keep up front: sign-up URL, save credentials, confirm the app, log into sandbox. *(setup)* — [02:08]
- [ ] **B2 · `FIX`** — Remove the **Change Management "Org-to-Org Metadata Deployment (Beta)"** step — the beta is gone. *(setup)* — [02:19]
- [ ] **B3 · `VERIFY`** — Remove the **Agentforce Vibes permission-assignment** step (permissions are already provisioned). Put back only if it turns out it needs to be packageable. *(setup)* — [02:24]
- [ ] **B4 · `FIX`** — Move **MCP server activation** out of Setup and into the Agent-Driven (AI-accelerated) path — it's only relevant there, and doesn't make sense to enable if you're not doing that path. *(setup → afv-walkthrough)* — [02:38]
- [ ] **B5 · `FIX`** — When MCP activation moves into the new section, add a **strong callout to work in your sandbox, not production** (people have activated them in prod). *(afv-walkthrough)* — [02:50]

## C. Inspect the App

- [ ] **C1 · `DECISION`** — Rename the section — not "Hands-On," likely **"Application Overview,"** to align with the hands-on portion. *(inspect-app)* — [03:15]
- [ ] **C2 · `FIX`** — Fix the list-view screenshots that show only the **ID field** (not helpful). The facilitator can push updated data into the org, or we remove the screenshots if we don't want to maintain them. *(inspect-app)* — [03:40]
- [ ] **C3 · `VERIFY`** — The saved dashboard screenshot: the facilitator thinks it's unused and should be removed. **Note:** it *is* used later — pasted into the Build-the-Leaderboard prompt to mark widget placement. Confirm with the facilitator; likely keep but make the linkage explicit rather than remove. *(inspect-app / build-leaderboard)* — [03:58]

## D. Solo Path

- [ ] **D1 · `FIX`** — Add a description of *what you're going to do* on the **Solo path landing page**, before jumping into the exercises. *(add-picklist / solo landing)* — [04:10]
- [ ] **D2 · `FIX`** — Timing: make this section **10 minutes**. *(add-picklist / promote-picklist)* — [04:53]

## E. Coordinated (Team) Path

- [ ] **E1 · `FIX`** — Numbering: either number everything consistently or **remove the numbers** if they don't help; make items aligned. *(team-path)* — [05:10]
- [ ] **E2 · `DECISION`** — Naming consistency: use **"Solo path"** (not "Solo Admin path") and **"Coordinated"** for the team path (deck confirms "Coordinated"). Be consistent throughout. *(all pages)* — [05:23]
- [ ] **E3 · `FIX`** — The launched demo needs to **link to / call out DevOps Center** explicitly — currently confusing and people end up in the wrong area. *(team-path)* — [05:43]

## F. Agentforce Vibes Walkthrough

- [ ] **F1 · `VERIFY`** — Confirm whether **Einstein must be enabled** to access Vibes. The facilitator believes it may not be required — if not, remove the step. *(afv-walkthrough)* — [06:17]
- [ ] **F2 · `FIX`** — This is where the moved **MCP setup step** lands (see B4). *(afv-walkthrough)* — [06:30]
- [ ] **F3 · `FIX`** — Vibes UI has changed (e.g., **Plan mode is less obvious**, "Let's Vibe" wording). Update screenshots/instructions to match, or remove screenshots that only show background info and aren't relevant. *(afv-walkthrough)* — [06:30], [08:51]

## G. Build the Leaderboard

- [ ] **G1 · `VERIFY`/`FIX`** — **Lightning Preview** is typically not working. If it won't work reliably, **remove it** — it's just causing frustration. *(build-leaderboard)* — [08:51]

## H. Promote to Production

- [ ] **H1 · `DECISION`** — Promote to prod should be done by **asking Agentforce Vibes to do it**, rather than going through DX Inspector (stay out of the "developer side"). *(promote-to-prod)* — [09:07]

## I. What's Next

- [ ] **I1 · `VERIFY`** — Confirm the resources are up to date. The facilitator questioned DevSecOps vs DevOps guide — **deck (p.71) intentionally uses the DevSecOps Guide (`sfdc.co/devsecopsguide`) + the feedback survey (`sfdc.co/devworkshopfb`)**, so DevSecOps is correct; just verify links. *(whats-next)* — [09:34]

## J. Navigation bug

- [ ] **J1 · `FIX`** — Pager bug: on **What's Next** and **Troubleshooting**, both Previous and Next point to Overview. Fix the pager targets to follow the real page order. *(whats-next, troubleshooting)* — [09:46]

---

## Out of scope (this branch)

- **OOS1** — Build a **DevOps Center hands-on** portion. The facilitator explicitly called this out as *separate from reviewing*. — [10:11]
- **OOS2** — Broader deck-alignment enhancements (full framing/naming rework beyond what the facilitator flagged) → deferred to a follow-up branch.

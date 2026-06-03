# Agentforce Vibes Extended Workshop — Learning Management Edition

For any questions about this workshop, reach out to @Sadhana Nandakumar.

This extended workshop tells a single story across two parts. The Connected Executive Education team has two requests landing on the same day from their business operations team:

1. **A quick metadata change:** Add a new enrollment status — "Deferred" — for students who need to pause temporarily (different from Withdrawn, which is permanent). Simple, urgent, needs to be in production today.
2. **A new dashboard feature:** The program directors want a Top Learners widget to spotlight high performers and drive motivation across the cohort.

Both requests follow the same governed flow — sandbox-first, reviewed, promoted through DX Inspector — but at very different levels of complexity. Together they show the full spectrum of Salesforce development in the Agentic era: from a single field change to a full LWC feature, all within the same workflow.

### Internal Enablement / SDO Provisioning / Demo Use

TFID: `0TTKX000000nmCX`
OR lookup the **Platform ALM & Governance Demo** on Solution Workspace.

Provisioning takes approximately an hour. This provisions a couple of sandboxes, installs the base app, and enables Code Builder.


## Table of Contents

**Part 1 — Simple Metadata Change via DX Inspector (~35 min)**

1. [Prep & Org Orientation (5 min)](#1-prep--org-orientation)
2. [Understand the Current Schema (5 min)](#2-understand-the-current-schema)
3. [Add the Deferred Status in the Sandbox (10 min)](#3-add-the-deferred-status-in-the-sandbox)
4. [Deploy to Sandbox & Verify (5 min)](#4-deploy-to-sandbox--verify)
5. [Promote to Production with DX Inspector (10 min)](#5-promote-to-production-with-dx-inspector)

**Part 2 — Build a Feature with Agentforce Vibes (~65 min)**

6. [Agentforce Vibes Walkthrough (5 min)](#6-agentforce-vibes-walkthrough)
7. [Explore with Metadata Explorer (5 min)](#7-explore-with-metadata-explorer)
8. [Scaffold Preview (7 min)](#8-scaffold-preview)
9. [Fast-Forward to Prebuilt Project (8 min)](#9-fast-forward-to-prebuilt-project)
10. [Live Preview (5 min)](#10-live-preview)
11. [Deploy to Sandbox & Verify (10 min)](#11-deploy-to-sandbox--verify)
12. [Make a Small Change & Redeploy (13 min)](#12-make-a-small-change--redeploy)
13. [Promote to Production with DX Inspector (5 min)](#13-promote-to-production-with-dx-inspector)
14. [Beyond Sandboxes & Q&A (7 min)](#14-beyond-sandboxes--qa)


---


# Part 1 — Simple Metadata Change via DX Inspector

> **The ask:** "We need a Deferred status on enrollments. Students are deferring to the next cohort — right now we're marking them Withdrawn, which is wrong. Can we get this into production today?"

This is the most common type of Salesforce request: a small, well-scoped metadata change that needs to go through the proper pipeline. We'll make the change in the **fullcopy sandbox**, verify it, then use DX Inspector to promote it to production — all in under 35 minutes.


## 1) Prep & Org Orientation (5 minutes)

Sign up using the event URL. Add the event code and your email address — you'll receive org credentials by email. Click the link to open the org directly.

We'll begin in the **fullcopy sandbox** — your safe environment for development and testing.

* In your production org, go to **Setup → Sandboxes**
* You will see two sandboxes listed. Use the **fullcopy** sandbox — click **Log In** next to it.

The sandbox username is `<prod-user-name>.fullcopy` / `orgfarm1234`

* From the fullcopy sandbox, open the **App Launcher** (waffle icon) and search for **Connected Executive Education**
* You should see the **Learning Management Dashboard** with a table of course enrollments

> **Take a moment** to explore. Open a few **Enrollment** records and look at the **Status** field. You'll see values: *Not Started, In Progress, On Hold, Withdrawn, Completed*. Notice there's no "Deferred" — that's what we're about to add.

* Next, from the **Setup** (gear) icon, select **Agentforce Vibes** to open the IDE.

Once loaded, Agentforce Vibes IDE is authenticated to the fullcopy sandbox and ready to go.


---


## 2) Understand the Current Schema (5 minutes)

Before touching anything, let's confirm what we're working with.

* In Agentforce Vibes, open the **Metadata Explorer** panel
* Navigate to **Enrollment__c → Fields → Status__c**
* Confirm the current picklist values: `Not Started`, `In Progress`, `On Hold`, `Withdrawn`, `Completed`

This is our baseline. We're adding `Deferred` — a status meaning the student has paused intentionally and plans to return in a future cohort, distinct from Withdrawn (which implies they've left the program).

> **Why this matters:** Adding a value without understanding the existing set risks duplicate semantics. "On Hold" and "Deferred" could overlap — but in this program's context, "On Hold" is admin-controlled (e.g., payment issue), while "Deferred" is student-initiated. Knowing the distinction makes the change intentional, not just technical.


---


## 3) Add the Deferred Status in the Sandbox (10 minutes)

Now let's make the change. We'll edit the metadata directly in the Agentforce Vibes IDE.

* In the file explorer, navigate to:
  `force-app/main/default/objects/Enrollment__c/fields/Status__c.field-meta.xml`

* You'll see the current picklist definition. Add the `Deferred` value inside the `<valueSetDefinition>` block:

```xml
<value>
    <fullName>Deferred</fullName>
    <default>false</default>
    <label>Deferred</label>
</value>
```

The full `<valueSetDefinition>` should now contain six values: `Completed`, `Deferred`, `In Progress`, `Not Started`, `On Hold`, `Withdrawn`.

Alternatively, ask Agentforce directly:

```
Add a new picklist value "Deferred" to the Status__c field on Enrollment__c.
It should not be the default value.
```

* Review the change Agentforce makes to the XML file — confirm it added the value correctly before proceeding.

<!-- FACILITATOR NOTE: Insert screenshot of the Status__c XML with Deferred value added -->


---


## 4) Deploy to Sandbox & Verify (5 minutes)

With the change made in our local project, let's deploy it into the fullcopy sandbox org.

* In the Agentforce conversation pane, enter:

```
Deploy the Enrollment__c Status__c field to my sandbox.
```

* Agentforce will confirm the target org — accept the default and proceed.

* Once deployed, verify the change in the sandbox:
  * Go to **Setup → Object Manager → Enrollment__c → Fields & Relationships → Status**
  * Confirm **Deferred** appears in the picklist values list

* Also verify it's visible on a record:
  * Open any **Enrollment** record
  * Edit the **Status** field — you should now see **Deferred** in the dropdown

> **Checkpoint:** If Deferred is visible and selectable, the sandbox deployment is good. We're ready to promote to production.

<!-- FACILITATOR NOTE: Insert screenshot of Enrollment record showing Deferred in the Status dropdown -->


---


## 5) Promote to Production with DX Inspector (10 minutes)

The change is validated in the fullcopy sandbox. Now we use **DX Inspector** to promote it to production — with full visibility into what's changing before anything is touched.

### Open DX Inspector

1. Navigate to **DX Inspector** (your facilitator will provide the URL, or use the Chrome extension)
2. Connect your **source environment**: the fullcopy sandbox
3. Connect your **target environment**: production

<!-- FACILITATOR NOTE: Insert screenshot of DX Inspector connection screen -->

### Review the Diff

DX Inspector shows you exactly what differs between the two environments:

| Component | Type | Status |
|-----------|------|--------|
| `Enrollment__c.Status__c` | CustomField (Picklist) | **Modified** — new value: Deferred |

* Click on the component to see the **diff** — the new `<value>` block highlighted in green
* Confirm this is the only change and nothing else is included

> This is the moment that matters in enterprise deployments. You're not just pushing code — you're reviewing it before it touches production. Even a one-value picklist change goes through this gate.

### Deploy to Production

1. Select the `Enrollment__c.Status__c` component
2. Click **Deploy to Target**
3. DX Inspector runs validation — confirm and proceed
4. Once complete, verify in production: open an Enrollment record and confirm **Deferred** is available in the Status dropdown

**Part 1 complete.** A business request went from conversation to production in under 35 minutes — through a sandbox, reviewed, and promoted with confidence.


---
---


# Part 2 — Build a Feature with Agentforce Vibes

> **The second ask:** "Program directors want a Top Learners section on the dashboard — top 5 students by completed enrollments, with their satisfaction ratings. Something that makes high performers visible."

This is a feature request, not a field change. It needs new Apex logic, LWC updates, and testing. This is where Agentforce Vibes earns its place: conversational scaffolding, live preview, iterative deployment — all inside the sandbox-first workflow we've already established.


## 6) Agentforce Vibes Walkthrough (5 minutes)

Inside Agentforce Vibes IDE, you'll see Agentforce — your conversational partner for vibe coding. When you chat with Agentforce, you're not just getting code suggestions — you're getting a coding partner that understands your project context and executes tools on your behalf, helping you complete entire development workflows through natural language.

The way Agentforce does this is through **Model Context Protocol (MCP)**. Think of MCP like the USB standard for AI agents: just as USB gives your computer a consistent way to connect to any device, MCP gives Agentforce a consistent way to connect to different development tools.

Here's how it works in practice:

* **Tool Discovery:** Agentforce knows what tools are available in your environment.
* **Intelligent Selection:** When you make a request, it determines which tools it needs.
* **Execution:** It runs those tools in the right order.
* **Results Integration:** It brings the results back into a single, coherent response.

Agentforce always works in two phases:

* **Plan** — explains what it intends to do and why.
* **Act** — executes those steps under guardrails.

### Explore the MCP Server

* Click **"Manage MCP Servers"**

* Notice that the **Salesforce DX MCP Server** is already added by default. Click the gear icon to explore the tools it supports. Scroll through the list, then click **Done**.

### Explore Agentforce Rules

* Click on **Manage Agentforce Rules & Workflows** from the bottom pane
* Inspect the rules — these are persistent guardrails that keep Agentforce aligned with your team's standards across every session

<!-- FACILITATOR NOTE: Insert screenshot of Rules panel -->


---


## 7) Explore with Metadata Explorer (5 minutes)

Before building, let's orient ourselves in the org schema — the same way you would on a real project dropped into an unfamiliar codebase.

* Open the **Metadata Explorer** panel in Agentforce Vibes
* Navigate the three custom objects that power the app: `Student__c`, `Course__c`, `Enrollment__c`

Use the Metadata Explorer to answer:

1. **How are the objects related?** Find the lookup fields on Enrollment__c — which object is the junction?
2. **What fields could power a Top Learners widget?** Look for fields that track completion, performance, and satisfaction on Enrollment__c.
3. **What's the API name for the attendance field?** You'll reference it in Part 2's iteration step.

> **Take note of these field API names** — they're your inputs when prompting Agentforce. Getting them right is the difference between a first-try scaffold and a prompt that needs corrections.

### Try a Live Query

* Click on `Enrollment__c` and use the **Query** feature
* Run: `SELECT Student__c, Status__c, Satisfaction_Rating__c, Attendance_Percentage__c FROM Enrollment__c WHERE Status__c = 'Completed' LIMIT 10`
* Get a feel for the data shape you're building against


---


## 8) Scaffold Preview (7 minutes)

Look at the **Learning Management Dashboard** in your browser:

* A branded header with the Connected Executive Education logo
* A search bar
* A table showing recent course enrollments with progress bars

There's empty space above the enrollment table — that's where the Top Learners widget will go.

From the bottom right of Agentforce, click **Plan** and enter:

```
I want to add a "Top Learners" section to the existing learningManagementDashboard LWC.
This section should show the top 5 students ranked by number of completed enrollments,
display each student's name, company, number of completed courses, and average satisfaction
rating, use a card-based layout with a trophy icon, and place it above the enrollment table
on the dashboard.
```

* **Plan mode** makes no file changes — it only analyzes and strategises. Examine the plan:
  * A new Apex method `getTopLearners()` in `LearningManagementController`
  * Updates to `learningManagementDashboard` LWC (HTML, JS, CSS)
  * SOQL aggregating enrollment data across `Student__c` and `Enrollment__c`

> **Iterate if you want:** Tell Agentforce "Also show their department" or "Use a leaderboard table instead of cards." Adjust until the plan matches your vision.

Since we have limited time, we'll preview scaffolding in Plan mode and then fast-forward into a curated project to experience the full loop — testing, deploying, and iterating.


---


## 9) Fast-Forward to Prebuilt Project (8 minutes)

To keep everyone on the same baseline, we'll clone a curated repository that contains the same functionality Agentforce would scaffold.

* In Agentforce Vibes IDE: **Menu → File → Close Folder**

* Then: **Menu → Terminal → New Terminal**

* In the terminal, paste the following (click **Allow** if prompted):

```bash
cd ..
cd codebuilder/
git clone https://github.com/sadhananandakumaralmny/learning-management-vibes
```

* Click the **File** icon from the left pane → **Open Folder** → select **learning-management-vibes** → click **OK**

The project is ready. Inspect the folder structure — you'll see the updated Apex controller with `getTopLearners()`, the modified LWC files, and test classes. You can right-click any file to run **Code Analyzer** for quality checks.

Finally, flip the switch from **Plan** to **Act** before the next step.


---


## 10) Live Preview (5 minutes)

Before deploying, let's preview the component with **Live Preview** — no deployment round-trip required.

In the terminal, run:

```bash
sf lightning dev app
```

This starts a local server that proxies your org's data while serving your LWC locally.

* A browser tab opens automatically — navigate to **Connected Executive Education**
* The dashboard loads with your **local component code** — including the Top Learners widget
* Edits to HTML or CSS update the browser instantly

### Try It

While Live Preview is running, ask Agentforce:

```
Change the Top Learners section header color to dark blue and make the trophy icon larger.
```

Watch the browser update within seconds. When done, press `Ctrl + C` to stop the local server.

| Without Live Preview | With Live Preview |
|---------------------|-------------------|
| Edit → Deploy (30-60s) → Refresh → Check | Edit → See it instantly |
| Broken deploy blocks testing | Errors surface immediately |


---


## 11) Deploy to Sandbox & Verify (10 minutes)

* In the Agentforce conversation pane:

```
Deploy this project to my sandbox.
```

* Confirm the target org when prompted and proceed.

* Once complete, verify:
  * Click the **window icon** from the bottom pane to open the org
  * Go to **App Launcher → Connected Executive Education**
  * The **Top Learners** widget should now appear above the enrollment table

> **What you should see:** A leaderboard showing the top 5 students with completed course counts, companies, and satisfaction ratings — trophy icons included.

<!-- FACILITATOR NOTE: Insert screenshot of the deployed Top Learners widget -->


---


## 12) Make a Small Change & Redeploy (13 minutes)

Development is iterative. Let's add an **Attendance Percentage** column to the widget — the same iterative loop you'd use on any feature request.

* In the Agentforce conversation pane:

```
Add an average attendance percentage to each student in the Top Learners widget.
Show it as a progress ring or percentage badge next to their name.
```

* Agentforce may ask for clarification on the best approach — choose the option to proceed.

> **TIP:** Agents are non-deterministic — your response may differ from the example. The agent iteratively fixes issues until it reaches a clean deployment.

* At every step Agentforce asks permission before changing files. Watch it dynamically fix errors as it goes — this is the Act loop in practice.

* Once deployed, hard refresh the sandbox (`Cmd + Shift + R`) to see the attendance percentage on each student card.

<!-- FACILITATOR NOTE: Insert screenshot of updated widget with attendance percentage badge -->


---


## 13) Promote to Production with DX Inspector (5 minutes)

The Top Learners widget is working in the sandbox. Now we promote it — the same way we promoted the Deferred picklist value in Part 1, but with more components this time.

### Open DX Inspector

1. Navigate to **DX Inspector**
2. Source: fullcopy sandbox | Target: production

### Review Your Changes

| Component | Type | Status |
|-----------|------|--------|
| `LearningManagementController` | ApexClass | **Modified** — new `getTopLearners()` method |
| `learningManagementDashboard` | LWC | **Modified** — updated HTML, JS, CSS |

* Click each component to review the **diff** — lines added in green, removed in red
* Confirm no unintended changes or debug code are included

### Deploy to Production

1. Select both components
2. Click **Deploy to Target**
3. Apex tests run automatically during validation
4. Confirm and deploy
5. Verify in production: **App Launcher → Connected Executive Education** — Top Learners widget should be live

> **Notice the pattern:** Whether it's one picklist value or a full LWC feature, the promotion path is the same — sandbox, review, DX Inspector, production. The tooling scales with the complexity; the workflow doesn't change.


---


## 14) Beyond Sandboxes & Q&A (7 minutes)

Today's two requests show the full range of the Agentforce ALM workflow:

| | Part 1: Deferred Status | Part 2: Top Learners Widget |
|---|---|---|
| Change type | Single picklist value | Apex + LWC feature |
| Scaffolded by | Manual XML edit / Agentforce prompt | Agentforce Vibes (Plan → Act) |
| Preview | N/A | Live Preview |
| Deploy path | Metadata deploy → DX Inspector | Agentforce deploy → DX Inspector |
| Production gate | DX Inspector diff + validation | DX Inspector diff + Apex tests |

Both followed the same governed loop:

* **Begin in the fullcopy sandbox** — safe environment for all development and testing
* **Make the change** — metadata edit or Agentforce scaffolding
* **Verify in sandbox** — confirm the change works as expected
* **Promote via DX Inspector** — diff review, validation, controlled promotion to production

This iterative cycle — from a field change to a full feature — is the core of the Agentforce ALM strategy. In real-world pipelines, different environment types play specific roles (Developer Sandbox for code, Full Copy Sandbox for agent testing and regression, staging for pre-production validation), but the workflow is always the same.

<!-- FACILITATOR NOTE: Insert slide showing the Salesforce Sandbox types and their
     role in the AI agent lifecycle -->

### Take-Home Prompts

Keep building beyond the workshop:

**Course Popularity Chart**
```
Add a "Popular Courses" section to the learningManagementDashboard that shows the top 5
courses by enrollment count, with a horizontal bar chart showing how full each course is
(Current_Enrollment__c vs. Max_Enrollment__c). Include the instructor name and rating.
```

**Revenue Summary**
```
Add a revenue summary card to the dashboard showing total Amount_Paid__c across all
enrollments, broken down by Payment_Status__c (Paid, Pending, Scholarship, etc.)
as a donut chart with the total in the center.
```

**Student Search Enhancement**
```
Enhance the existing search bar on the dashboard to also support filtering by Country__c
and Role__c using dropdown filters alongside the text search.
```

**Certification Tracker**
```
Build a new "Certification Tracker" section showing students who have completed courses
where Certification_Offered__c is true, whether Certificate_Issued__c is true or false,
and the Certificate_Date__c. Highlight overdue certificates in red.
```


---


## Troubleshooting

### Agentforce isn't connecting to my org
* Make sure the Salesforce DX MCP server is configured and your org is authenticated
* Try asking Agentforce: `What org am I connected to?`

### My changes aren't showing up after deploy
* Hard refresh your browser (`Cmd + Shift + R`)
* Clear your browser cache
* Check **Setup → Deployment Status** to confirm the deployment succeeded

### Apex compilation error
* Ask Agentforce to read the error message and fix it
* Common causes: field API name typos, missing `@AuraEnabled` annotations, incorrect SOQL syntax

### The widget shows "No data"
* Verify data exists: ask Agentforce to query `SELECT COUNT() FROM Enrollment__c WHERE Status__c = 'Completed'`
* Check field-level security: the queried fields must be accessible to your profile

### Live Preview not loading
* Make sure you stopped any previous `sf lightning dev app` process
* Check that port 8081 is not in use by another application
* Try running `sf lightning dev app --port 8082` to use an alternate port

### Deferred picklist value not appearing on records
* Hard refresh the org after deployment
* Check **Setup → Object Manager → Enrollment__c → Fields → Status** to confirm the value is saved
* If it deployed but isn't visible, check field-level security on the Status field for your profile

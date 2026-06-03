# Agentforce Vibes Hands-on Workshop — Learning Management Edition

For any questions about this workshop, reach out to @Sadhana Nandakumar.

Agentforce Vibes is how we reimagine development in the Agentic era. Instead of juggling tools, boards, and terminals, developers can open a Salesforce sandbox, launch Agentforce Vibes IDE directly inside it, and start building with Agentforce.
The flow is conversational and governed:

* Begin in a sandbox — your safe place to build.
* Use vibe coding with Agentforce to scaffold functionality.
* Preview changes instantly with Live Preview.
* Test and run quality checks in the same loop.
* Deploy to sandbox for verification.
* When it's ready, promote through DX Inspector into production.

In this workshop, you'll walk that flow yourself. You'll explore a Learning Management app with students, courses, and enrollments — then build a new **Top Learners** widget on the dashboard using Agentforce Vibes. You'll test, deploy, iterate, and promote — all within the governed sandbox-first workflow.

### Internal Enablement / SDO Provisioning / Demo Use

This workshop guide can be used for internal enablement as well. To provision this demo, use the
TFID: `0TTKX000000nmCX`
OR
lookup the **Platform ALM & Governance Demo** on Solution Workspace to get started.

The provisioning & post-spin takes approximately an hour. This will end up provisioning a couple of sandboxes, the base app installed, and Code Builder should be enabled on these orgs.


## Table of Contents

1. [Prep (5 min)](#1-prep)
2. [Agentforce Vibes Walkthrough (5 min)](#2-agentforce-vibes-walkthrough)
3. [Explore with Metadata Explorer (5 min)](#3-explore-with-metadata-explorer)
4. [Scaffold Preview (7 min)](#4-scaffold-preview)
5. [Fast-Forward to Prebuilt Project (8 min)](#5-fast-forward-to-prebuilt-project)
6. [Live Preview (5 min)](#6-live-preview)
7. [Deploy to Sandbox & Verify (10 min)](#7-deploy-to-sandbox--verify)
8. [Make a Small Change & Redeploy (13 min)](#8-make-a-small-change--redeploy)
9. [Promote to Production with DX Inspector (5 min)](#9-promote-to-production-with-dx-inspector)
10. [Beyond Sandboxes (5 min)](#10-beyond-sandboxes)
11. [Take-Home Prompts & Q&A (5 min)](#11-take-home-prompts--qa)


---


## 1) Prep (5 minutes)

Sign up using the URL, add in the event code and your email address. You will be receiving the org credentials on this email. You should now see a signup successful message with a link to open the org directly. Alternatively you can also check your email for the sign up link.

We'll begin where all safe development starts — the sandbox. This is your isolated environment where you can experiment and iterate without risk to production. From here, you can open Agentforce Vibes IDE right inside the sandbox.

* Click on **Setup → Sandboxes → DevSandbox → Login**

The sandbox username is `<prod-user-name>.DevSandbox` / `orgfarm1234`

* From the Dev Sandbox, search for the **Connected Executive Education** app from App Launcher (the waffle icon in the top left)
* Click on **Connected Executive Education**
* You should see the **Learning Management Dashboard** with a table of course enrollments, a search bar, and the Connected Executive Education logo

> **Take a moment** to click around. Open a few **Student**, **Course**, and **Enrollment** records to familiarize yourself with the data — students have bios, companies, and roles; courses have instructors, prices, and ratings; enrollments track progress, grades, payments, and satisfaction.

* Next, from the **Setup** (gear) icon select **Agentforce Vibes**.

Once loaded you will see the Agentforce Vibes IDE (formerly Code Builder) has already authenticated to the DevSandbox and is ready to go.

* Agentforce should automatically open, select **I agree** to the terms and click on **Enable & Start Building**.

<!-- FACILITATOR NOTE: Insert screenshot of Agentforce Vibes IDE initial screen -->


---


## 2) Agentforce Vibes Walkthrough (5 minutes)

Inside Agentforce Vibes IDE, you'll see Agentforce — your conversational partner for vibe coding. When you chat with Agentforce, you're not just getting code suggestions — you're getting a coding partner that can understand your project context and execute tools on your behalf, and help you complete entire development workflows through natural language conversations.

The way Agentforce does this is through **Model Context Protocol, or MCP**. Think of MCP like the USB standard for AI agents: just as USB gives your computer a consistent way to connect to printers, cameras, or drives, MCP gives Agentforce a consistent way to connect to different development tools.

Here's how it works in practice:

* **Tool Discovery:** Agentforce knows what tools are available in your environment.
* **Intelligent Selection:** When you make a request, it determines which tools it needs.
* **Execution:** It runs those tools in the right order.
* **Results Integration:** It then brings the results back into a single, coherent response.

With MCP, Agentforce doesn't just generate code — it scaffolds metadata, LWCs, Apex, and UI assets while staying aligned with Salesforce development patterns. The out-of-the-box MCP servers are designed specifically for Salesforce, so the tools understand your org's metadata, operate securely within Salesforce's trusted boundary, and optimize for common development workflows.

Finally, Agentforce always works in two phases:

* **Plan** — explains what it intends to do and why.
* **Act** — executes those steps under guardrails.

### Explore the MCP Server

* Click **"Manage MCP Servers"**.

<!-- FACILITATOR NOTE: Insert screenshot of MCP server management panel -->

* Notice that the **Salesforce DX MCP Server** is already added by default. Click on the gear icon to explore the MCP Server and the tools it supports.

* Here you will see a list of supported tools, scroll to explore the various tools. Click on **Done** to exit out of this view.

### Explore Agentforce Rules

Agentforce also supports **Rules** — persistent instructions that establish your team's standards and deployment guardrails. Unlike one-time prompts, rules remain active, so Agentforce always follows your patterns and quality checks. By default Agentforce comes with a bunch of rules to promote best practices.

* Click on the **Manage Agentforce Rules & Workflows** icon on the bottom pane

* Inspect the various rules, you can click on the pencil icon on any of the rules to explore further.

<!-- FACILITATOR NOTE: Insert screenshot of Rules panel -->


---


## 3) Explore with Metadata Explorer (5 minutes)

Before building anything, you need to understand the data you're working with. Instead of reading documentation, you'll use the **Metadata Explorer** to discover the schema yourself — just like you would on a real project where you're dropped into an unfamiliar org.

### Open Metadata Explorer

In Vibes, open the **Metadata Explorer** panel. This gives you a live, browsable view of every object, field, relationship, and metadata type in your connected org.

<!-- FACILITATOR NOTE: Insert screenshot of Metadata Explorer showing object list -->

### Your Discovery Mission

Use the Metadata Explorer to answer these questions on your own:

1. **What custom objects exist in this org?** Browse the object list and find the three that power the Learning Management app.

2. **How are they related?** Find the lookup fields that connect the objects. Which object is the junction object?

3. **What picklist values are available?** Find the Status field on each object. What are the valid values? (Hint: they're different on each object.)

4. **What fields could power a "Top Learners" widget?** Browse the fields and think about which ones track completion, performance, and satisfaction.

> **Take notes** as you explore — you'll reference these field API names when you prompt Agentforce to build your widget. Getting the API names right is the difference between a prompt that works on the first try and one that needs corrections.

### Try a Live Query

Once you've explored the schema, try running a SOQL query directly from the Metadata Explorer to see the data:

* Click on an object and use the **Query** feature
* Try filtering enrollments by status or sorting students by a field
* Get a feel for the volume and shape of the data

> **Why this matters:** On real projects, you won't have a cheat sheet of field names. The Metadata Explorer is how you orient yourself in any org — learn to use it now and it becomes a superpower.


---


## 4) Scaffold Preview (7 minutes)

Now let's take the Agentic Chat for a spin. Look at the **Learning Management Dashboard** in your browser. You'll see:

* A branded header with the Connected Executive Education logo
* A search bar
* A table showing recent course enrollments with progress bars

<!-- FACILITATOR NOTE: Insert annotated screenshot of the dashboard with an arrow
     pointing to the empty area above the enrollment table, labeled:
     "We'll add a Top Learners widget here!" -->

From the bottom right section of Agentforce, click on **Plan**. Now provide the following prompt:

```
I want to add a "Top Learners" section to the existing learningManagementDashboard LWC.
This section should show the top 5 students ranked by number of completed enrollments,
display each student's name, company, number of completed courses, and average satisfaction
rating, use a card-based layout with a trophy icon, and place it above the enrollment table
on the dashboard.
```

* **Plan mode** focuses on analysis and strategy without making changes to your files or org. Examine the plan generated — notice it identifies all the metadata required including:
    * A new Apex method in `LearningManagementController`
    * Updates to the `learningManagementDashboard` LWC (HTML, JS, CSS)
    * The SOQL queries needed to aggregate enrollment data

> **Checkpoint:** Does the plan make sense? If you want changes, tell Agentforce (e.g., "Also show their department" or "Use a leaderboard table instead of cards"). Iterate until you're happy.

Vibe coding is great for rapid prototyping and cutting boilerplate, but enterprise teams also need trust and governance. That's why Agentforce Vibes balances both — fast scaffolding with Plan and Act, but always under developer review.

Since we have limited time in this workshop, we'll preview scaffolding in Plan mode, then fast-forward into a curated project so you can experience the full loop — testing, deploying, and iterating in the sandbox.


---


## 5) Fast-Forward to Prebuilt Project (8 minutes)

To make sure everyone can complete the full loop today, we'll now fast-forward to a curated repository. It contains the same functionality Agentforce would scaffold — metadata, the Top Learners widget LWC updates, and test classes — so we all start from the same working baseline.

* In Agentforce Vibes IDE click on the **Menu** icon from the left pane → **File** → **Close Folder**

* Next go to **Menu** from the left pane → **Terminal** → **New Terminal**

* In the terminal paste the following git command; if asked to allow pasting on terminal window, click **Allow**:

```bash
cd ..
cd codebuilder/
git clone https://github.com/sadhananandakumaralmny/learning-management-vibes
```

* Now let's open this folder, click on the **File** icon from the left pane and click on **Open Folder**

<!-- FACILITATOR NOTE: Insert screenshot showing folder selection dialog -->

* Choose the folder **learning-management-vibes** and click **OK**.

* The project is now available for us to use, you can inspect the folder structure to see all the metadata related to the Top Learners feature.

Notice how the curated repository already includes everything Agentforce would scaffold: the updated Apex controller with a `getTopLearners()` method, the modified dashboard LWC, and test classes. There are MCP tools that can run tests for both agents and Apex methods, and you can also keep code quality in check using the Code Analyzer — just right-click a file to analyze it.

With that foundation in mind, let's move into Live Preview and then deployment.

Finally also make sure you flip the switch from **Plan** to **Act** so we can deploy in our next chapter.


---


## 6) Live Preview (5 minutes)

Before deploying anything, let's preview the component using **Live Preview**. This gives you an instant feedback loop — no deployment round-trip required.

### Start Live Preview

In your terminal, run:

```bash
sf lightning dev app
```

This starts a local development server that proxies your Salesforce org's data while serving your LWC components locally.

### What You'll See

1. A browser tab opens automatically with your org's Lightning Experience
2. Navigate to the **Connected Executive Education** app
3. The dashboard loads with **your local component code** — including the Top Learners widget
4. Changes are reflected in **real time** — if you edit the HTML or CSS, the browser updates instantly without a full page reload

<!-- FACILITATOR NOTE: Insert screenshot showing Live Preview with the Top Learners
     widget visible on the dashboard -->

### Why Live Preview Matters

| Without Live Preview | With Live Preview |
|---------------------|-------------------|
| Edit code → Deploy (30-60s) → Hard refresh → Check | Edit code → See it instantly |
| Broken deploy blocks testing | Syntax errors show immediately in the browser console |
| Slow iteration cycle | Fast, interactive development |

### Try It: Make a Quick Tweak

While Live Preview is running, try a small change to see instant feedback. Ask Agentforce:

```
Change the Top Learners section header color to dark blue and make the trophy icon larger.
```

Watch the browser — it should update within seconds, no deploy needed.

> **Tip:** Keep Live Preview running in the background while you iterate. Only deploy when you're happy with the result.

When you're done previewing, press `Ctrl + C` in the terminal to stop the local server.


---


## 7) Deploy to Sandbox & Verify (10 minutes)

Now let's deploy the functionality into our sandbox. Agentforce packages and deploys automatically, under the sandbox-first rule. Once complete, we'll flip to the Salesforce UI and validate.

* In the Agentforce conversation pane, paste the following prompt:

```
Deploy this project to my sandbox.
```

* Notice that it asks for a confirmation on which org to use — let's choose the default target org and proceed.

<!-- FACILITATOR NOTE: Insert screenshot of org confirmation prompt -->

* Behind the scenes, MCP tools are used to get the username and perform the deployment. Once done, inspect all the changes deployed. Once we have a clean run we can proceed to the next step. Agentforce asks for confirmation as it performs the various actions.

<!-- FACILITATOR NOTE: Insert screenshot of successful deployment output -->

* We will now verify the changes. Click on the **window icon** from the bottom pane to open the org.

* From the App Launcher go to **Connected Executive Education** app → on the dashboard you should now see the **Top Learners** widget above the enrollment table.

> **What you should see:** A leaderboard-style section showing the top 5 students with their completed course counts, companies, and satisfaction ratings displayed with trophy icons and visual indicators.

<!-- FACILITATOR NOTE: Insert screenshot of the deployed Top Learners widget on the dashboard -->


---


## 8) Make a Small Change & Redeploy (13 minutes)

Development is iterative. Let's make a change: add an **Attendance Percentage** column to the Top Learners widget.
This demonstrates the EVC loop: instruct → scaffold → deploy → verify. Every iteration lives in the sandbox until it's validated.

* In the Agentforce conversation window, paste the following prompt:

```
Add an average attendance percentage to each student in the Top Learners widget.
Show it as a progress ring or percentage badge next to their name.
```

* Notice how Agentforce asks for clarification of the best approach to follow. The user can choose the option to proceed with the development.

> **TIP:** Agents are non-deterministic — you might not see the same response as above! You might notice issues, but the agent iteratively fixes the issues until eventually getting to a clean deployment.

* At every stage Agentforce asks for permission to make file changes and dynamically updates to fix errors as it goes until completion and even continues to deploy the changes.

<!-- FACILITATOR NOTE: Insert screenshot showing iterative error fixing -->

* The changes are now deployed and we can now verify the dev env
* Refresh the sandbox to see the new field added (you might need to hard refresh with `Cmd + Shift + R`)

<!-- FACILITATOR NOTE: Insert screenshot of updated widget with attendance percentage -->


---


## 9) Promote to Production with DX Inspector (5 minutes)

Your widget is working in the sandbox — now let's see how you'd promote it to production. In a real-world workflow, you wouldn't deploy directly from your IDE to production. Instead, you'd use a change management tool. That's where the **DX Inspector** comes in.

### What is DX Inspector?

DX Inspector is a browser-based tool that lets you inspect, compare, and promote metadata between Salesforce environments. Think of it as a visual deployment pipeline — you can see exactly what changed, review diffs, and push to production with confidence.

### Open DX Inspector

1. Navigate to **DX Inspector** (your facilitator will provide the URL, or install the Chrome extension)
2. Connect your **source environment** (the sandbox you've been working in)
3. Connect your **target environment** (production)

<!-- FACILITATOR NOTE: Insert screenshot of DX Inspector connection screen -->

### Review Your Changes

DX Inspector will show you a side-by-side comparison of what's different between your sandbox and production:

| Component | Type | Status |
|-----------|------|--------|
| `LearningManagementController` | ApexClass | **Modified** — new `getTopLearners()` method |
| `learningManagementDashboard` | LWC | **Modified** — updated HTML, JS, CSS |

1. Click on each component to see the **diff** — lines added in green, removed in red
2. Review the changes to make sure only your intended modifications are included
3. Confirm there are no unintended changes or debug code left behind

<!-- FACILITATOR NOTE: Insert screenshot of DX Inspector diff view -->

### Deploy to Production

1. **Select the components** you want to promote (check the boxes next to each)
2. Click **"Deploy to Target"** (or "Promote")
3. DX Inspector will run validation first — if there are Apex tests, they'll execute automatically
4. Once validation passes, confirm the deployment
5. You'll see a success confirmation with deployment details

### Verify in Production

1. Log into your **production org**
2. Navigate to the **Connected Executive Education** app
3. Confirm the Top Learners widget appears on the dashboard with live data

> **Why DX Inspector instead of direct deploy?**
> In enterprise Salesforce development, you never deploy directly to production from your IDE. DX Inspector gives you:
> * **Visibility** — see exactly what's changing before it hits production
> * **Diff review** — catch unintended changes, debug code, or missing components
> * **Audit trail** — track who deployed what and when
> * **Validation** — run tests before committing to the deployment
> * **Rollback awareness** — understand the blast radius of your changes


---


## 10) Beyond Sandboxes (5 minutes)

What we've done today is the safe, iterative cycle inside a sandbox: building, testing, quality checks, deployment, and verification — then promoting to production through DX Inspector.

Here's a recap of what we saw today:

* Begin in a sandbox — safe environment for development
* Launch Agentforce Vibes IDE directly inside Salesforce
* Explore org metadata using the Metadata Explorer
* Use Agentforce to scaffold features conversationally
* Apply rules and guardrails through MCP for consistency
* Preview changes instantly with Live Preview
* Deploy and validate safely in the sandbox
* Promote to production through DX Inspector with diff review and validation

This iterative cycle — from scaffolding to validation to promotion — is the core of the Agentforce ALM strategy. Although we used a developer Sandbox for the purpose of this workshop, to make this process secure and repeatable for every feature, we rely on a specific environment at every step (e.g., a separate Full Copy Sandbox for testing agents and complex apps).

<!-- FACILITATOR NOTE: Insert slide showing the Salesforce Sandbox types and their
     role in the AI agent lifecycle -->


---


## 11) Take-Home Prompts & Q&A (5 minutes)

Keep building your prompt-engineering skills beyond this workshop. Use these examples as a starting point for your own experimentation. The more you iterate, the better you'll understand how prompt phrasing, context, and grounding affect the quality of responses.

### Course Popularity Chart
```
Add a "Popular Courses" section to the learningManagementDashboard that shows the top 5
courses by enrollment count, with a horizontal bar chart showing how full each course is
(Current_Enrollment__c vs. Max_Enrollment__c). Include the instructor name and rating.
```

### Revenue Summary
```
Add a revenue summary card to the dashboard showing total Amount_Paid__c across all
enrollments, broken down by Payment_Status__c (Paid, Pending, Scholarship, etc.)
as a donut chart with the total in the center.
```

### Student Search Enhancement
```
Enhance the existing search bar on the dashboard to also support filtering by Country__c
and Role__c using dropdown filters alongside the text search.
```

### Certification Tracker
```
Build a new "Certification Tracker" section showing students who have completed courses
where Certification_Offered__c is true, whether Certificate_Issued__c is true or false,
and the Certificate_Date__c. Highlight overdue certificates in red.
```

Keep refining your approach — effective prompt writing is a skill that improves with practice.


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

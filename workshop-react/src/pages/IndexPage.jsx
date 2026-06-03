export default function IndexPage() {
  return (
    <div dangerouslySetInnerHTML={{__html: `<h1>Agent &amp; App Development Workshop</h1>
        <div class="vp-time-badge">&#128339; <strong>~2 hours</strong></div>

        <p>In this workshop, you'll walk two real development scenarios — a quick metadata change made entirely in the UI, and a full feature build using Agentforce Vibes. Both go through the same governed, sandbox-first pipeline to production.</p>

        <h2>The scenario</h2>

        <p>You're a developer on the team that manages the <strong>Connected Executive Education</strong> app. Two requests have come in from the business today:</p>
        <ol>
            <li>Add a new <strong>Deferred</strong> enrollment status — students pausing to join a future cohort are being incorrectly marked as Withdrawn.</li>
            <li>Add a <strong>Top Learners Leaderboard</strong> widget to the dashboard so program directors can see high performers at a glance.</li>
        </ol>

        <div style="margin-bottom: 20px;">
            <img src="./images/dashboard-arrow.jpg" alt="The current dashboard with an arrow showing where the Top Learners widget will go" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
        </div>

        <h2>The three development paths</h2>

        <p>There are 3 agent &amp; application development paths. This workshop covers <strong>two of them</strong>:</p>

        <div class="vp-features">
            <div class="vp-feature-card">
                <h4>The Solo Admin Path</h4>
                <p>For solo admins and small hybrid teams making surgical updates — UI copy tweaks, field changes, and quick config fixes.</p>
            </div>
            <div class="vp-feature-card">
                <h4>The Team Path</h4>
                <p>For small hybrid teams, multiple teams, and enterprise teams building large-scale features. Source-tracked development with built-in change management and release pipelines.</p>
            </div>
            <div class="vp-feature-card">
                <h4>The AI-Accelerated Path</h4>
                <p>For multiple teams and enterprise teams building complex, high-quality features using natural language. AI-accelerated development workflows.</p>
            </div>
        </div>

        <div style="margin-bottom: 20px;">
            <img src="./images/agent-app-dev-lifecycle.jpg" alt="Build, test, and deploy with Salesforce Agent & App Development lifecycle diagram" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
        </div>

        <h2>Before the session</h2>

        <ol class="vp-activity-steps">
            <li>
                <span class="vp-activity-step-num" style="background: var(--vp-c-text-3); font-size:11px;">PRE</span>
                <span class="vp-activity-step-text"><strong>Setup</strong> — Sign up for your workshop org, log into the fullcopy sandbox, and enable Change Management</span>
                <span class="vp-activity-step-time">Before the session</span>
            </li>
        </ol>

        <h2>Workshop agenda</h2>

        <div class="use-case-label solo">Use Case 1 — Solo Admin Path</div>
        <ol class="vp-activity-steps">
            <li>
                <span class="vp-activity-step-num">1</span>
                <span class="vp-activity-step-text"><strong>Add the Deferred Status</strong> — Add a new picklist value to the Enrollment Status field directly in Setup, no code required</span>
                <span class="vp-activity-step-time">12 min</span>
            </li>
            <li>
                <span class="vp-activity-step-num">2</span>
                <span class="vp-activity-step-text"><strong>Promote to Production</strong> — Use DX Inspector to review the diff and promote the field change from sandbox to production</span>
                <span class="vp-activity-step-time">10 min</span>
            </li>
        </ol>

        <div class="use-case-label ai">Use Case 2 — AI-Accelerated Path</div>
        <ol class="vp-activity-steps">
            <li>
                <span class="vp-activity-step-num">3</span>
                <span class="vp-activity-step-text"><strong>Inspect the App</strong> — Tour the Learning Management app: explore Courses, Students, and Enrollments, and see the dashboard you'll be enhancing</span>
                <span class="vp-activity-step-time">2 min</span>
            </li>
            <li>
                <span class="vp-activity-step-num">4</span>
                <span class="vp-activity-step-text"><strong>Agentforce Vibes Walkthrough</strong> — Launch Agentforce Vibes and get oriented with MCP servers, skills, rules, and the Metadata Explorer</span>
                <span class="vp-activity-step-time">8 min</span>
            </li>
            <li>
                <span class="vp-activity-step-num">5</span>
                <span class="vp-activity-step-text"><strong>Build the Leaderboard</strong> — Write a natural language prompt and let Agentforce Vibes generate the Apex and LWC code for the Top Learners widget</span>
                <span class="vp-activity-step-time">7 min</span>
            </li>
            <li>
                <span class="vp-activity-step-num">6</span>
                <span class="vp-activity-step-text"><strong>Verify</strong> — Open your sandbox and confirm the Top Learners widget appears on the dashboard</span>
                <span class="vp-activity-step-time">5 min</span>
            </li>
            <li>
                <span class="vp-activity-step-num">7</span>
                <span class="vp-activity-step-text"><strong>Promote to Production</strong> — Open DX Inspector to review changed files, then promote from sandbox to production</span>
                <span class="vp-activity-step-time">5 min</span>
            </li>
        </ol>

        <p style="margin-top: 24px;">
            <a href="#/setup" class="vp-button">Start the Workshop &#8594;</a>
        </p>

        <nav class="vp-pager">
            <div></div>
            <a href="#/setup" class="next">
                <span class="pager-label">Next</span>
                <span class="pager-title">Setup</span>
            </a>
        </nav>`}} />
  );
}

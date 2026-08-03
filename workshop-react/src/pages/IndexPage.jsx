export default function IndexPage() {
  return (
    <div dangerouslySetInnerHTML={{__html: `<h1>Agent &amp; App Development Workshop</h1>
        <div class="vp-time-badge">&#128339; <strong>1&ndash;1.5 hours</strong></div>

        <p>In this workshop, you'll get hands-on with real development scenarios across different ways of working and building on the Salesforce Platform — all through the same governed, sandbox-first pipeline to production.</p>

        <h2>The scenario</h2>

        <p>You're a developer on the team that manages the <strong>Connected Executive Education</strong> app. A request has come in from the business today:</p>
        <ol>
            <li>Add a <strong>Top Learners Leaderboard</strong> widget to the dashboard so program directors can see high performers at a glance.</li>
        </ol>

        <div style="margin-bottom: 20px;">
            <img src="./images/dashboard-arrow.jpg" alt="The current dashboard with an arrow showing where the Top Learners widget will go" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
        </div>

        <h2>The development paths</h2>

        <p>Development isn't one-size-fits-all — you choose how you work and how you develop, and every team is a blend of the two.</p>

        <h3>How you work</h3>
        <div class="vp-features">
            <div class="vp-feature-card">
                <h4>Solo</h4>
                <p>Work independently for fast, isolated execution with minimal overhead.</p>
            </div>
            <div class="vp-feature-card">
                <h4>Coordinated</h4>
                <p>Collaborate across teams to synchronize parallel changes.</p>
            </div>
        </div>

        <h3>How you develop</h3>
        <div class="vp-features">
            <div class="vp-feature-card">
                <h4>Human Driven</h4>
                <p>Use code or visual tools to build a solution.</p>
            </div>
            <div class="vp-feature-card">
                <h4>Agent Driven</h4>
                <p>Agents act on natural language intent to build solutions.</p>
            </div>
        </div>

        <p>This workshop focuses on the <strong>Agent Driven</strong> path.</p>

        <h2>Before the session</h2>

        <ol class="vp-activity-steps">
            <li>
                <span class="vp-activity-step-num" style="background: var(--vp-c-text-3); font-size:11px;">PRE</span>
                <span class="vp-activity-step-text"><strong>Setup</strong> — Sign up for your workshop org and log into the fullcopy sandbox</span>
                <span class="vp-activity-step-time">Before the session</span>
            </li>
        </ol>

        <h2>Workshop agenda</h2>

        <div class="use-case-label overview">Application Overview</div>
        <ol class="vp-activity-steps">
            <li>
                <span class="vp-activity-step-num">1</span>
                <span class="vp-activity-step-text"><strong>Inspect the App</strong> — Tour the Learning Management app: explore Courses, Students, and Enrollments, and see the dashboard you'll be enhancing</span>
                <span class="vp-activity-step-time">2 min</span>
            </li>
        </ol>

        <div class="use-case-label ai">Agent Driven</div>
        <ol class="vp-activity-steps">
            <li>
                <span class="vp-activity-step-num">1</span>
                <span class="vp-activity-step-text"><strong>Agentforce Vibes Walkthrough</strong> — Launch Agentforce Vibes and get oriented with MCP servers, skills, rules, and the Metadata Explorer</span>
                <span class="vp-activity-step-time">8 min</span>
            </li>
            <li>
                <span class="vp-activity-step-num">2</span>
                <span class="vp-activity-step-text"><strong>Build the Leaderboard</strong> — Write a natural language prompt and let Agentforce Vibes generate the Apex and LWC code for the Top Learners widget</span>
                <span class="vp-activity-step-time">7 min</span>
            </li>
            <li>
                <span class="vp-activity-step-num">3</span>
                <span class="vp-activity-step-text"><strong>Verify</strong> — Open your sandbox and confirm the Top Learners widget appears on the dashboard</span>
                <span class="vp-activity-step-time">2 min</span>
            </li>
            <li>
                <span class="vp-activity-step-num">4</span>
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

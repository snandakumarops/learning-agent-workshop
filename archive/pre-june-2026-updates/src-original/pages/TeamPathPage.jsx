export default function TeamPathPage() {
  return (
    <div dangerouslySetInnerHTML={{__html: `<h1>The Team Path</h1>
        <div class="vp-time-badge">&#128339; <strong>5 minutes</strong></div>

        <p>You've seen what a solo admin and an AI-accelerated developer can do. Now let's look at how teams operate at scale — with source-tracked development, built-in change management, and release pipelines.</p>

        <h2>What's different at team scale?</h2>

        <p>The solo and AI-accelerated paths work beautifully for individual contributors. But when you have multiple admins, developers, and release managers working in parallel, you need more:</p>

        <ul>
            <li><strong>Source tracking</strong> — every change is versioned and attributed</li>
            <li><strong>Branching and isolation</strong> — teams work in parallel without stepping on each other</li>
            <li><strong>Automated pipelines</strong> — changes move through environments on a defined schedule</li>
            <li><strong>Release management</strong> — approvals, gates, and rollback built in</li>
        </ul>

        <p>This is where <strong>DevOps Center</strong> comes in — Salesforce's native team development platform.</p>

        <h2>See it in action</h2>

        <p>The interactive demo below walks you through the full team development lifecycle — from work item creation to production promotion — using DevOps Center.</p>

        <div class="launch-card">
            <h3>The Team Path — Interactive Demo</h3>
            <p>Source-tracked development with built-in change management and release pipelines. See how small hybrid teams, multiple teams, and enterprise teams build large-scale features.</p>
            <a href="https://salesforceplatform.navattic.com/kqce01g9?g=cmng53ok400bz04l12cb61whe&s=0" class="vp-button" target="_blank">Launch the Demo ↗</a>
            <p style="margin-top: 12px; font-size: 13px; color: #476582;">Opens in a new tab — come back when you're done to continue to What's Next.</p>
        </div>

        <nav class="vp-pager">
            <a href="#/promote-picklist" class="prev">
                <span class="pager-label">Previous</span>
                <span class="pager-title">2. Promote to Production</span>
            </a>
            <a href="#/afv-walkthrough" class="next">
                <span class="pager-label">Next</span>
                <span class="pager-title">3. Agentforce Vibes Walkthrough</span>
            </a>
        </nav>`}} />
  );
}

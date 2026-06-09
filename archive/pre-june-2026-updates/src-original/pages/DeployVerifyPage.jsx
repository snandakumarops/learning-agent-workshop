export default function DeployVerifyPage() {
  return (
    <div dangerouslySetInnerHTML={{__html: `<h1>Verify</h1>
        <div class="vp-time-badge">&#128339; <strong>2 minutes</strong></div>

        <p>Agentforce Vibes has already deployed the changes to your sandbox. Now open the org and confirm the leaderboard widget is live.</p>

        <div class="step-block">
            <h3><span class="step-num">1</span> Open the sandbox org and refresh</h3>
            <p>Open your sandbox org in the browser and navigate to the <strong>Learning Management</strong> app. Refresh the page to see the Top Learners Leaderboard widget live on the dashboard.</p>

            <div style="margin-top: 12px;">
                <img src="./images/build-sandbox-verify.jpg" alt="Learning Management dashboard with Top Learners Leaderboard widget" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
        </div>

        <div class="vp-callout tip">
            <div class="vp-callout-title">Looking good</div>
            <p>The Top Learners Leaderboard is now live in your sandbox, showing the top 5 students ranked by average progress. Next, you'll promote these changes to production using Change Management.</p>
        </div>

        <nav class="vp-pager">
            <a href="#/build-leaderboard" class="prev">
                <span class="pager-label">Previous</span>
                <span class="pager-title">4. Build the Leaderboard</span>
            </a>
            <a href="#/promote-to-prod" class="next">
                <span class="pager-label">Next</span>
                <span class="pager-title">6. Promote to Production</span>
            </a>
        </nav>`}} />
  );
}

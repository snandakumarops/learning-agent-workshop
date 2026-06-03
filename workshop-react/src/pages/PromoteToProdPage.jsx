export default function PromoteToProdPage() {
  return (
    <div dangerouslySetInnerHTML={{__html: `<h1>Promote to Production</h1>
        <div class="vp-time-badge">&#128339; <strong>5 minutes</strong></div>

        <p>Your leaderboard is live in the sandbox. Now use <strong>Change Management</strong> to promote the changes from sandbox to production — no CLI, no package.xml, just point and click.</p>

        <h2>Open Change Management</h2>

        <div class="step-block">
            <h3><span class="step-num">1</span> Open Change Management</h3>
            <p>In your sandbox, click the <strong>Sandbox</strong> badge in the top-left corner to open the DX Inspector. Since this is a Full sandbox, you'll need to manually add the metadata you want to deploy.</p>

            <div style="margin-top: 12px;">
                <img src="./images/deploy-cm-empty.jpg" alt="Change Management page with no metadata" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
        </div>

        <h2>Add metadata</h2>

        <div class="step-block">
            <h3><span class="step-num">2</span> Add the LWC component</h3>
            <p>Click <strong>Add Metadata</strong> (the + icon). Set the Metadata Type to <strong>LightningComponentBundle</strong>, search for <strong>learning</strong>, select <strong>learningManagementDashboard</strong>, then click <strong>Add</strong>.</p>

            <div style="margin-top: 12px;">
                <img src="./images/deploy-add-lwc.jpg" alt="Add Metadata dialog showing LightningComponentBundle selection" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
        </div>

        <div class="step-block">
            <h3><span class="step-num">3</span> Add the Apex class</h3>
            <p>Click <strong>Add Metadata</strong> again. Set the Metadata Type to <strong>ApexClass</strong>, find and select <strong>LearningManagementController</strong>, then click <strong>Add</strong>.</p>

            <div style="margin-top: 12px;">
                <img src="./images/deploy-add-apex.jpg" alt="Add Metadata dialog showing ApexClass selection" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
        </div>

        <div class="step-block">
            <h3><span class="step-num">4</span> Review the metadata list</h3>
            <p>You should now see 2 items in the Change Management list:</p>
            <ul>
                <li><strong>LearningManagementController</strong> — ApexClass</li>
                <li><strong>learningManagementDashboard</strong> — LightningComponentBundle</li>
            </ul>

            <div style="margin-top: 12px;">
                <img src="./images/deploy-cm-items.jpg" alt="Change Management showing 2 metadata items ready to deploy" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
        </div>

        <h2>Connect to production</h2>

        <div class="step-block">
            <h3><span class="step-num">5</span> Select the existing production environment</h3>
            <p>Click <strong>Deploy Options</strong> to open the Deploy Changes dialog. Switch to the <strong>Existing Environment</strong> tab — you'll see the <strong>production</strong> org you connected during Part 1. Select it.</p>

            <div style="margin-top: 12px;">
                <img src="./images/deploy-new-env-filled.jpg" alt="Deploy Changes dialog showing existing production environment selected" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
        </div>

        <h2>Deploy</h2>

        <div class="step-block">
            <h3><span class="step-num">6</span> Preview and deploy</h3>
            <p>After authorization, you'll see the Deploy Changes preview showing the <strong>Source Org</strong> (your sandbox) and <strong>Target Org</strong> (production), along with the 2 metadata items. Click <strong>Deploy</strong>.</p>

            <div style="margin-top: 12px;">
                <img src="./images/deploy-preview.jpg" alt="Deploy Changes preview showing sandbox to production" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
        </div>

        <div class="step-block">
            <h3><span class="step-num">7</span> Verify in production</h3>
            <p>Wait a few minutes for the deployment to complete, then open your <strong>production org</strong> and navigate to the <strong>Learning Management</strong> app to verify the Top Learners Leaderboard is live.</p>

            <div style="margin-top: 12px;">
                <img src="./images/build-sandbox-verify.jpg" alt="Production Learning Management dashboard with Top Learners Leaderboard" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
        </div>

        <div class="vp-callout tip">
            <div class="vp-callout-title">You did it</div>
            <p>You just went from a natural language prompt to a production deployment — building, testing, and promoting a new feature using Agentforce Vibes and Change Management. No CLI, no package.xml, no manual code.</p>
        </div>

        <!-- PAGER -->
        <nav class="vp-pager">
            <a href="#/deploy-verify" class="prev">
                <span class="pager-label">Previous</span>
                <span class="pager-title">5. Deploy &amp; Verify</span>
            </a>
            <a href="#/whats-next" class="next">
                <span class="pager-label">Next</span>
                <span class="pager-title">What's Next</span>
            </a>
        </nav>`}} />
  );
}

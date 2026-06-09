export default function PromotePicklistPage() {
  return (
    <div dangerouslySetInnerHTML={{__html: `<h1>Promote to Production</h1>
        <div class="vp-time-badge">&#128339; <strong>10 minutes</strong></div>

        <p>The Deferred status is live in the sandbox. Now we need to get it into production — safely, with full visibility into what's changing before anything is touched. That's where <strong>DX Inspector</strong> comes in.</p>

        <h2>What is DX Inspector?</h2>

        <p>DX Inspector is a browser-based tool that lets you compare and promote metadata between Salesforce environments. It shows you exactly what's different between your sandbox and production before you deploy anything.</p>

        <h2>Open Change Management</h2>

        <div class="step-block">
            <h3><span class="step-num">6</span> Open Change Management</h3>
            <p>In your sandbox, click the <strong>Sandbox</strong> badge in the top-left corner to open DX Inspector (Change Management).</p>
            <div style="margin-top: 12px;">
                <img src="./images/promote-cm-empty.jpg" alt="DX Inspector Change Management panel showing the empty state with no metadata changes" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
            <div class="vp-callout tip" style="margin-top: 16px;">
                <div class="vp-callout-title">Why is it empty?</div>
                <p>Source tracking only runs automatically in Developer and Developer Pro sandboxes. In a <strong>fullcopy</strong> sandbox, you add the metadata you want to promote manually — that's the next step.</p>
            </div>
        </div>

        <h2>Add the metadata to track</h2>

        <div class="step-block">
            <h3><span class="step-num">7</span> Add the Status field</h3>
            <p>Click <strong>Add Metadata</strong>. In the dialog, set <strong>Metadata Type</strong> to <code>CustomField</code>, type <code>enrollment</code> in the File Name search, then check <strong>Enrollment__c.Status__c</strong> and click <strong>Add</strong>.</p>
            <div class="vp-callout tip" style="margin-top: 12px;">
                <div class="vp-callout-title">Lookup not loading?</div>
                <p>If the File Name lookup doesn't populate after you choose <code>CustomField</code>, close the dialog and click <strong>Add Metadata</strong> again.</p>
            </div>
            <div style="margin-top: 12px;">
                <img src="./images/promote-add-metadata.jpg" alt="Add Metadata dialog filtered to CustomField and enrollment with Enrollment__c.Status__c selected" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
            <p style="margin-top: 12px;">The Status field now appears in Change Management with operation <code>MANUAL</code> — that's your one item to promote.</p>
            <div style="margin-top: 12px;">
                <img src="./images/promote-cm-tracked.jpg" alt="Change Management showing Enrollment__c.Status__c tracked as a manual change" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
        </div>

        <h2>Connect to production</h2>

        <div class="step-block">
            <h3><span class="step-num">8</span> Connect production (first time only)</h3>
            <p>Select the <strong>Enrollment__c.Status__c</strong> row, then click <strong>Deploy Options</strong>. In the Deploy Changes dialog, click <strong>New Environment</strong>. Enter <strong>production</strong> as the Environment Name, leave <strong>Production org</strong> selected, and click <strong>Connect</strong>.</p>
            <div style="margin-top: 12px;">
                <img src="./images/promote-new-env.jpg" alt="Deploy Changes dialog on the New Environment tab with environment name production and Production org selected" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
            <p style="margin-top: 12px;">You'll be redirected to authenticate — log in with your <strong>production org credentials</strong> and click <strong>Allow</strong>.</p>
            <div style="margin-top: 12px;">
                <img src="./images/deploy-oauth.jpg" alt="Salesforce Allow Access OAuth screen for the production org" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
            <p style="margin-top: 12px;">Back in the Deploy Changes dialog, switch to <strong>Existing Environment</strong>. The <strong>production</strong> entry is now listed — select it and click <strong>Next</strong>.</p>
            <div style="margin-top: 12px;">
                <img src="./images/promote-existing-env.jpg" alt="Deploy Changes dialog on the Existing Environment tab with the production org selected" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
            <div class="vp-callout tip" style="margin-top: 16px;">
                <div class="vp-callout-title">You only do this once</div>
                <p>This production connection is saved. In Part 2, you'll skip straight to selecting the existing environment instead of going through the Connect flow again.</p>
            </div>
        </div>

        <h2>Review and deploy</h2>

        <div class="step-block">
            <h3><span class="step-num">9</span> Preview the diff and deploy</h3>
            <p>The Preview screen shows the <strong>Source Org</strong> (your fullcopy sandbox) and the <strong>Target Org</strong> (production), with the single CustomField listed below: <code>Enrollment__c.Status__c</code>. This is the governance moment — exactly what's changing, nothing more.</p>
            <div style="margin-top: 12px;">
                <img src="./images/promote-preview.jpg" alt="Deploy Changes preview showing source sandbox to target production with the Status custom field listed" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
            <p style="margin-top: 12px;">Click <strong>Deploy</strong>. Once the deployment completes, open an Enrollment record in production and confirm <strong>Deferred</strong> is available in the Status dropdown.</p>
        </div>

        <div class="vp-callout success">
            <div class="vp-callout-title">Part 1 complete</div>
            <p>A business request went from conversation to production in under 25 minutes — through a sandbox, reviewed, and promoted with full visibility. No surprises, no shortcuts.</p>
            <p>Now let's tackle the bigger ask.</p>
        </div>

        <nav class="vp-pager">
            <a href="#/add-picklist" class="prev">
                <span class="pager-label">Previous</span>
                <span class="pager-title">1. Add the Deferred Status</span>
            </a>
            <a href="#/team-path" class="next">
                <span class="pager-label">Next</span>
                <span class="pager-title">The Team Path</span>
            </a>
        </nav>`}} />
  );
}

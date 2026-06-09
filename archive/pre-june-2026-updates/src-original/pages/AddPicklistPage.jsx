export default function AddPicklistPage() {
  return (
    <div dangerouslySetInnerHTML={{__html: `<h1>Add the Deferred Status</h1>
        <div class="vp-time-badge">&#128339; <strong>12 minutes</strong></div>

        <div class="vp-callout warning">
            <div class="vp-callout-title">&#9888;&#65039; Stop &mdash; check you're in a sandbox</div>
            <p>Before you make any changes, confirm the org you're logged into is your <strong>fullcopy sandbox</strong>, not production. Check the org name in the top-right user menu.</p>
        </div>

        <p>The business team has flagged a problem: students who need to pause their studies and rejoin a future cohort are being marked as <strong>Withdrawn</strong> — but Withdrawn implies they've left the program permanently. They need a separate status: <strong>Deferred</strong>.</p>
        <p>This is a simple picklist change made directly in Setup. No code, no IDE.</p>

        <h2>See the gap</h2>

        <div class="step-block">
            <h3><span class="step-num">1</span> Open an Enrollment record</h3>
            <p>From the fullcopy sandbox, open the <strong>App Launcher</strong> and search for <strong>Learning Management</strong>. Click into the <strong>Enrollments</strong> tab and open any record.</p>
            <p>Click <strong>Edit</strong> and look at the <strong>Status</strong> dropdown. You'll see: <code>Not Started</code>, <code>In Progress</code>, <code>On Hold</code>, <code>Withdrawn</code>, <code>Completed</code>. No Deferred.</p>
        </div>

        <div class="vp-callout tip">
            <div class="vp-callout-title">Why not just use "On Hold"?</div>
            <p><strong>On Hold</strong> is admin-controlled — typically used for a payment issue or admin hold. <strong>Deferred</strong> is student-initiated: they've chosen to move to a future cohort. The distinction matters for reporting, dashboards, and any automations downstream.</p>
        </div>

        <h2>Add the picklist value in Setup</h2>

        <div class="step-block">
            <h3><span class="step-num">2</span> Open Object Manager</h3>
            <p>Click the <strong>gear icon &rarr; Setup</strong>. In Quick Find, type <code>object manager</code> and click <strong>Object Manager</strong>. In the list, search for and open <strong>Enrollment</strong>.</p>
            <div style="margin-top: 12px;">
                <img src="./images/picklist-object-manager.jpg" alt="Object Manager filtered to enrollment with the Enrollment custom object highlighted" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
        </div>

        <div class="step-block">
            <h3><span class="step-num">3</span> Open the Status field</h3>
            <p>Click <strong>Fields &amp; Relationships</strong> in the left panel, then find and click the <strong>Status</strong> field.</p>
        </div>

        <div class="step-block">
            <h3><span class="step-num">4</span> Add the new value</h3>
            <p>Scroll to the <strong>Values</strong> section and click <strong>New</strong>. Enter <code>Deferred</code> as the value label and click <strong>Save</strong>.</p>
            <div style="margin-top: 12px;">
                <img src="./images/picklist-add-value.jpg" alt="Status field picklist values list with the New button highlighted" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
            <p style="margin-top: 12px;">The value is live in the sandbox immediately — no deployment needed for this step.</p>
        </div>

        <h2>Verify</h2>

        <div class="step-block">
            <h3><span class="step-num">5</span> Check it on a record</h3>
            <p>Go back to any <strong>Enrollment</strong> record, click <strong>Edit</strong>, and confirm <strong>Deferred</strong> now appears in the Status dropdown.</p>
            <div style="margin-top: 12px;">
                <img src="./images/picklist-verify-deferred.jpg" alt="Enrollment record edit view with the Status dropdown showing Deferred as a new value" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
        </div>

        <div class="vp-callout tip">
            <div class="vp-callout-title">Checkpoint</div>
            <p>Deferred is selectable in the sandbox. The change is done — but it only exists here. Next we'll use DX Inspector to compare this sandbox against production and promote it safely.</p>
        </div>

        <nav class="vp-pager">
            <a href="#/inspect-app" class="prev">
                <span class="pager-label">Previous</span>
                <span class="pager-title">Inspect the App</span>
            </a>
            <a href="#/promote-picklist" class="next">
                <span class="pager-label">Next</span>
                <span class="pager-title">2. Promote to Production</span>
            </a>
        </nav>`}} />
  );
}

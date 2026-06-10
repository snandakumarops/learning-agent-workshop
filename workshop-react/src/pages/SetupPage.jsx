export default function SetupPage() {
  return (
    <div dangerouslySetInnerHTML={{__html: `<h1>Setup</h1>
        <div class="vp-time-badge">&#128339; <strong>7 minutes</strong></div>
        <p>Complete these steps <strong>before the workshop session</strong> so you're ready to go when we start.</p>

        <h2>Sign up for your workshop org</h2>

        <div class="step-block">
            <h3><span class="step-num">1</span> Open the sign-up URL</h3>
            <p>Navigate to the sign-up URL provided by your facilitator. Enter the <strong>event code</strong> and your <strong>email address</strong> — you'll receive org credentials by email. Click the link to open the org directly.</p>
            <div style="margin-top: 12px;">
                <img src="./images/signup-form.jpg" alt="OrgFarm sign-up form" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
            <div class="vp-callout tip">
                <div class="vp-callout-title">Save your credentials</div>
                <p>Write down your username and password — you'll need them throughout both parts of the workshop.</p>
            </div>
        </div>

        <div class="step-block">
            <h3><span class="step-num">2</span> Confirm you see the app</h3>
            <p>In your production org, click the <strong>App Launcher</strong> (the grid icon in the top left) and search for <strong>Learning Management</strong>. You should see the Connected Executive Education dashboard with a Course Enrollments table.</p>
            <div style="margin-top: 12px;">
                <img src="./images/dashboard-screenshot.jpg" alt="The Learning Management dashboard" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
        </div>

        <h2>Log into your sandbox</h2>

        <div class="step-block">
            <h3><span class="step-num">3</span> Navigate to Sandboxes</h3>
            <p>In your production org, click the <strong>gear icon</strong> in the top right and select <strong>Setup</strong>. In the Quick Find box on the left, type <code>sandbox</code> and click <strong>Sandboxes</strong> under Environments.</p>
        </div>

        <div class="step-block">
            <h3><span class="step-num">4</span> Log into the fullcopy sandbox</h3>
            <p>You will see two sandboxes listed. Use the <strong>fullcopy</strong> sandbox — click <strong>Log In</strong> next to it. If prompted to register your phone number, you can skip that step.</p>
            <p>If you need to log in again later, go to <strong>test.salesforce.com</strong>. The username is your production username with <code>.fullcopy</code> appended (e.g. <code>user@example.com.fullcopy</code>) and the password is <code>orgfarm1234</code>.</p>
            <div style="margin-top: 12px;">
                <img src="./images/sandbox-fullcopy.jpg" alt="Sandboxes page showing fullcopy sandbox highlighted" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
        </div>

        <h2>Activate MCP Servers</h2>

        <p>MCP (Model Context Protocol) servers connect Agentforce Vibes to your org's capabilities. You need to activate two servers — they're used in the AI-Accelerated path (Part 2) of the workshop.</p>

        <div class="step-block">
            <h3><span class="step-num">5</span> Navigate to MCP Servers</h3>
            <p>In your sandbox, go to <strong>Setup &rarr;</strong> search for <code>mcp ser</code> in Quick Find <strong>&rarr; MCP Servers</strong> under Integrations &gt; API Catalog. You'll see a list of available servers, all with status <strong>Inactive</strong>.</p>
            <div style="margin-top: 12px;">
                <img src="./images/mcp-servers-list.jpg" alt="MCP Servers list in Setup" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
        </div>

        <div class="step-block">
            <h3><span class="step-num">6</span> Activate salesforce-api-context</h3>
            <p>Click <strong>salesforce-api-context</strong> from the list, then click <strong>Activate</strong>. This server provides Agentforce Vibes with Salesforce API context so it can generate code that works with your org's specific configuration.</p>
            <div style="margin-top: 12px;">
                <img src="./images/mcp-server-active.jpg" alt="MCP Server activated" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
        </div>

        <div class="step-block">
            <h3><span class="step-num">7</span> Activate metadata-experts</h3>
            <p>Go back to the MCP Servers list and click <strong>metadata-experts</strong>, then click <strong>Activate</strong>. This server allows Agentforce Vibes to discover and inspect your org's metadata — objects, fields, relationships, and configurations.</p>
        </div>

        <div class="vp-callout warning">
            <div class="vp-callout-title">Having trouble?</div>
            <p>If you can't log in or don't see the Learning Management app, raise your hand at the start of the workshop and a facilitator will help you get set up.</p>
        </div>

        <p>Once you can see the app in your sandbox and the MCP servers are active, you're all set.</p>

        <nav class="vp-pager">
            <a href="#/" class="prev">
                <span class="pager-label">Previous</span>
                <span class="pager-title">Overview</span>
            </a>
            <a href="#/inspect-app" class="next">
                <span class="pager-label">Next</span>
                <span class="pager-title">Inspect the App</span>
            </a>
        </nav>`}} />
  );
}

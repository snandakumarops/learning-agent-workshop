export default function TroubleshootingPage() {
  return (
    <div dangerouslySetInnerHTML={{__html: `<h1>Troubleshooting</h1>

        <p>Iterative development is normal — even experienced developers encounter errors. Here are common issues and how to resolve them.</p>

        <h2>General Agentforce Vibes Issues</h2>

        <h3>Agentforce Vibes is unresponsive</h3>
        <ul>
            <li>Wait a moment — Agentforce Vibes may be "thinking" through complex requirements.</li>
            <li>Click <strong>Try Again</strong> if the response seems stuck.</li>
            <li>Start a new task if the current conversation isn't progressing.</li>
            <li>Check the terminal for error messages.</li>
            <li>Ask a facilitator if the problem persists.</li>
        </ul>

        <h2>MCP and Connection Issues</h2>

        <h3>"Cannot find default-target org" error</h3>
        <p>This means the MCP server lost its connection to your org. To fix it:</p>
        <ul>
            <li>Open the <strong>MCP Servers</strong> panel in the Let's Vibe sidebar.</li>
            <li>Toggle the <strong>Salesforce DX</strong> server off (red indicator).</li>
            <li>Wait a few seconds, then toggle it back on (yellow, then green indicator).</li>
            <li>The MCP server acts as the bridge between Agentforce Vibes and the Salesforce CLI — toggling it re-establishes the connection.</li>
            <li>As a fallback, open the terminal and run <code>sf org list</code> to verify your default org is set.</li>
        </ul>

        <h2>Build Issues</h2>

        <h3>Planning phase is taking a long time</h3>
        <p>The planning phase can take 2–3 minutes. This is normal — Agentforce Vibes is analyzing your org metadata and determining the best approach.</p>

        <h3>Code generation errors</h3>
        <ul>
            <li>Code generation errors are expected — even AI-written code needs iteration.</li>
            <li>Agentforce Vibes often self-corrects automatically. Watch for it to detect and fix issues on its own.</li>
            <li>If it doesn't self-correct, provide the full error message including any stack traces when starting a new task.</li>
        </ul>

        <h2>Deployment Issues</h2>

        <h3>Deployment failed</h3>
        <ul>
            <li>Read the error message carefully — it usually tells you exactly what went wrong.</li>
            <li>Copy the error message and start a new task asking Agentforce Vibes to fix the issue.</li>
            <li>Common causes: missing dependencies, syntax errors, or org connection problems.</li>
            <li>If your LWC references an Apex class, make sure the Apex is deployed before the LWC.</li>
        </ul>

        <h2>Lightning Preview and Testing Issues</h2>

        <h3>App looks different than expected</h3>
        <p>This is normal. Generative AI incorporates randomness, so your app's appearance may vary slightly from the screenshots in this guide. As long as the leaderboard widget displays the correct data, it's working correctly.</p>

        <h3>UI elements are not functional</h3>
        <p>Open the browser DevTools (<strong>Cmd + Option + I</strong> on Mac, <strong>Ctrl + Shift + I</strong> on Windows) and check the Console tab for JavaScript errors.</p>

        <h3>Changes not showing up</h3>
        <ul>
            <li>Try clearing your browser cache or doing a hard refresh (<strong>Cmd + Shift + R</strong> / <strong>Ctrl + Shift + R</strong>).</li>
            <li>Lightning preview may have port conflicts — check the terminal for any port-related errors.</li>
        </ul>

        <div class="vp-callout tip">
            <div class="vp-callout-title">General advice</div>
            <p>When in doubt: check the terminal output, review the agent's responses carefully, and don't hesitate to start a fresh task. If you're stuck, raise your hand and a facilitator will help.</p>
        </div>

        <nav class="vp-pager">
            <a href="#/" class="prev">
                <span class="pager-label">Previous</span>
                <span class="pager-title">Overview</span>
            </a>
            <a href="#/" class="next">
                <span class="pager-label">Next</span>
                <span class="pager-title">Overview</span>
            </a>
        </nav>`}} />
  );
}

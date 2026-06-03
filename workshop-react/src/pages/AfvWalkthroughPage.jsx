export default function AfvWalkthroughPage() {
  return (
    <div dangerouslySetInnerHTML={{__html: `<h1>Agentforce Vibes Walkthrough</h1>
        <div class="vp-time-badge">&#128339; <strong>8 minutes</strong></div>

        <div class="vp-callout warning">
            <div class="vp-callout-title">&#9888;&#65039; Stop &mdash; check you're in a sandbox</div>
            <p>Before you make any changes, confirm the org you're logged into is your <strong>fullcopy sandbox</strong>, not production. Check the org name in the top-right user menu.</p>
        </div>

        <p>Agentforce Vibes is a browser-based AI-powered IDE built directly into Salesforce. It always starts in a sandbox, so your data is already masked and no PII ever reaches the developer. There's nothing to install and nothing to configure.</p>

        <h2>Open Agentforce Vibes</h2>

        <div class="step-block">
            <h3><span class="step-num">1</span> Launch from the Setup Menu</h3>
            <p>In your sandbox, click the <strong>gear icon</strong> in the top right to open the Setup Menu. You'll see <strong>Agentforce Vibes</strong> listed with an external link icon. Click it to launch.</p>

            <div style="margin-top: 12px;">
                <img src="./images/afv-setup-menu.jpg" alt="Setup Menu showing Agentforce Vibes option" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
        </div>

        <div class="step-block">
            <h3><span class="step-num">2</span> Wait for the environment to load</h3>
            <p>Agentforce Vibes will set up your virtual environment. This may take a few minutes on first launch — leave the page open and it will refresh when it's ready.</p>

            <div style="margin-top: 12px;">
                <img src="./images/afv-loading.jpg" alt="Agentforce Vibes loading screen" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
        </div>

        <h2>The IDE</h2>

        <div class="step-block">
            <h3><span class="step-num">3</span> Welcome page and file explorer</h3>
            <p>Once loaded, you'll see the <strong>Agentforce Vibes IDE</strong> welcome page. The left panel shows the <strong>Explorer</strong> with your <code>dx-project</code> — this is the Salesforce DX project structure you will work with. Notice that it is automatically connected to the sandbox. If you don't see the Explorer panel, click the file icon in the top of the left activity bar to open it.</p>

            <div style="margin-top: 12px;">
                <img src="./images/afv-welcome.jpg" alt="Agentforce Vibes IDE welcome page with file explorer" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
        </div>

        <div class="step-block">
            <h3><span class="step-num">4</span> The "Let's Vibe" sidebar</h3>
            <p>Click the <strong>Agentforce Vibes</strong> icon in the left activity bar to open the <strong>Let's Vibe</strong> sidebar. You may be prompted to enable Agentforce Vibes — click <strong>Enable</strong> to proceed. This is your starting point for working with the AI agent.</p>
            <p>At the bottom of the sidebar, notice the <strong>Plan</strong> and <strong>Act</strong> mode toggles and the prompt input where you'll type your tasks.</p>

            <div style="margin-top: 12px;">
                <img src="./images/afv-lets-vibe.jpg" alt="Let's Vibe sidebar showing Manage MCP Servers" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
        </div>

        <h2>MCP Servers</h2>

        <div class="step-block">
            <h3><span class="step-num">5</span> Connected MCP servers</h3>
            <p>Click <strong>Manage MCP Servers</strong> from the Let's Vibe sidebar to expand the panel and see all three connected servers:</p>
            <ul>
                <li><strong>Salesforce DX</strong> — access to org metadata, deployment, and source tracking</li>
                <li><strong>Salesforce API Context</strong> — understands your org's API structure and data model</li>
                <li><strong>Salesforce Metadata Experts</strong> — discovers and resolves metadata types and dependencies</li>
            </ul>

            <div style="margin-top: 12px;">
                <img src="./images/afv-manage-mcp.jpg" alt="Manage MCP Servers from the Let's Vibe sidebar" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>

            <p>Each server shows a green dot indicating it's active. Through these MCP servers, the agent knows your custom objects and your business logic. It doesn't guess your schema — it reads it.</p>

            <div style="margin-top: 12px;">
                <img src="./images/afv-mcp-expanded.jpg" alt="MCP Servers expanded showing Salesforce DX, API Context, and Metadata Experts all active" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
        </div>

        <h2>Skills</h2>

        <div class="step-block">
            <h3><span class="step-num">6</span> What the agent can do</h3>
            <p>Click the <strong>Skills</strong> tab in the sidebar to see the list of available skills. Skills define <strong>what the agent can do</strong> — the actions it can take and the systems it can interact with.</p>

            <div style="margin-top: 12px;">
                <img src="./images/afv-skills-pane.jpg" alt="Skills from the left pane" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>

            <p>Salesforce ships out-of-the-box skills built on years of platform best practices, including:</p>
            <ul>
                <li><code>generating-lightning-app</code> — build complete Lightning Experience applications</li>
                <li><code>generating-apex</code> — create Apex classes and triggers</li>
                <li><code>generating-custom-object</code> — scaffold custom objects and fields</li>
                <li><code>generating-custom-tab</code> — create custom tabs for your app</li>
                <li><code>generating-permission-set</code> — define permissions and access</li>
            </ul>
            <p>You can click any skill to view its <code>SKILL.md</code> file, which describes when and how the agent uses that skill.</p>

            <div style="margin-top: 12px;">
                <img src="./images/afv-skill-md.jpg" alt="SKILL.md file open showing generating-lightning-app skill definition" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
        </div>

        <h2>Rules</h2>

        <div class="step-block">
            <h3><span class="step-num">7</span> How the agent behaves</h3>
            <p>Click the <strong>Rules</strong> tab to see the governance guardrails. Rules define <strong>how the agent behaves</strong> — the boundaries around security, data access, and best practices.</p>
            <p>Salesforce provides out-of-the-box rules like <code>a4v-expert-global-rule.md</code> that ensure every interaction operates inside a defined, governed system. These rules enforce standards around code quality, security patterns, and Salesforce platform conventions.</p>

            <div style="margin-top: 12px;">
                <img src="./images/afv-rule-md.jpg" alt="a4v-expert-global-rule.md showing Salesforce Metadata Generation rules" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
        </div>

        <h2>Metadata Explorer</h2>

        <div class="step-block">
            <h3><span class="step-num">8</span> Retrieve org metadata</h3>
            <p>In the prompt input at the bottom, type the following prompt:</p>
            <div class="copy-block" style="position: relative; background: var(--vp-c-bg-soft); border-radius: 8px; padding: 12px 16px; padding-right: 48px; font-size: 13px; line-height: 1.6; margin-bottom: 16px; font-family: 'SF Mono', 'Fira Code', Menlo, monospace; white-space: pre-wrap; word-wrap: break-word;">Retrieve all custom objects associated with the app Connected_Executive_Education from my org into the project folder, make sure to create a manifest before retrieving.<button onclick="navigator.clipboard.writeText(this.parentElement.childNodes[0].textContent.trim());this.textContent='Copied!';setTimeout(()=>this.textContent='Copy',1500)" style="position: absolute; top: 8px; right: 8px; background: var(--vp-c-bg); border: 1px solid var(--vp-c-divider); border-radius: 4px; padding: 4px 8px; cursor: pointer; font-size: 12px; color: var(--vp-c-text-2);" onmouseover="this.style.borderColor='var(--vp-c-brand)'" onmouseout="this.style.borderColor='var(--vp-c-divider)'">Copy</button></div>
            <p>Agentforce Vibes will create a manifest file and retrieve the metadata from your sandbox into the project folder.</p>

            <div class="vp-callout tip">
                <div class="vp-callout-title">Approve requests to proceed</div>
                <p>Agentforce Vibes will ask for permission before executing actions. You can approve each request to let it proceed. If prompted to choose an org, select the <strong>default</strong> option.</p>
            </div>

            <div style="margin-top: 12px;">
                <img src="./images/afv-retrieve-metadata.jpg" alt="Retrieving custom objects metadata from the org" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
        </div>

        <div class="step-block">
            <h3><span class="step-num">9</span> Explore objects and fields</h3>
            <p>In the Explorer, expand <strong>force-app > main > default > objects</strong> to see the three custom objects: <strong>Course__c</strong>, <strong>Enrollment__c</strong>, and <strong>Student__c</strong>. Expand any object to browse its fields.</p>

            <div style="margin-top: 12px;">
                <img src="./images/afv-explorer-objects.jpg" alt="Explorer showing custom objects and fields" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
        </div>

        <div class="step-block">
            <h3><span class="step-num">10</span> Visualize the schema</h3>
            <p>Click on any field file to open it in the editor. Then click the <strong>Visualize</strong> button in the top right to see a visual representation of your custom objects and their relationships.</p>

            <div style="margin-top: 12px;">
                <img src="./images/afv-visualize-button.jpg" alt="Click Visualize button in the editor toolbar" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>

            <p>You can see how <strong>Enrollment__c</strong> connects to both <strong>Student__c</strong> and <strong>Course__c</strong> through lookup fields, along with every field and its data type.</p>

            <div style="margin-top: 12px;">
                <img src="./images/afv-visualize.jpg" alt="Visual schema diagram showing Student__c, Course__c, and Enrollment__c relationships" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
        </div>

        <div class="vp-callout tip">
            <div class="vp-callout-title">Governed by design</div>
            <p>Every interaction in Agentforce Vibes operates inside a governed system. Skills define what the agent can do. Rules define how it behaves. MCP servers connect it to your org metadata. And sandbox boundaries ensure you're always building safely — security and governance are built into the platform, not bolted on after.</p>
        </div>

        <!-- PAGER -->
        <nav class="vp-pager">
            <a href="#/inspect-app" class="prev">
                <span class="pager-label">Previous</span>
                <span class="pager-title">Inspect the App</span>
            </a>
            <a href="#/build-leaderboard" class="next">
                <span class="pager-label">Next</span>
                <span class="pager-title">4. Build the Leaderboard</span>
            </a>
        </nav>`}} />
  );
}

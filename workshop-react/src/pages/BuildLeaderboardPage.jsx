export default function BuildLeaderboardPage() {
  return (
    <div dangerouslySetInnerHTML={{__html: `<h1>Build the Leaderboard</h1>
        <div class="vp-time-badge">&#128339; <strong>7 minutes</strong></div>

        <p>Now it's time to build. You'll give Agentforce Vibes a natural language prompt along with the dashboard screenshot you saved earlier, and it will retrieve the existing code, generate new components, and create tests for you.</p>

        <h2>Submit the prompt</h2>

        <div class="step-block">
            <h3><span class="step-num">1</span> Attach the dashboard screenshot and submit the prompt</h3>
            <p>First, find the dashboard screenshot you saved in Step 1 (the one with the orange arrow) in Finder (Mac) or File Explorer (Windows) and copy it (<strong>Cmd + C</strong> on Mac, <strong>Ctrl + C</strong> on Windows). Then click into the prompt input in Agentforce Vibes and paste it (<strong>Cmd + V</strong> / <strong>Ctrl + V</strong>). You should see the image attached to the conversation. Then type the following prompt:</p>
            <div class="copy-block" style="position: relative; background: var(--vp-c-bg-soft); border-radius: 8px; padding: 12px 16px; padding-right: 48px; font-size: 13px; line-height: 1.6; margin-bottom: 16px; font-family: 'SF Mono', 'Fira Code', Menlo, monospace; white-space: pre-wrap; word-wrap: break-word;">Retrieve the existing learningManagementDashboard LWC component and the LearningManagementController Apex class from my org. Then add a "Top Learners Leaderboard" widget to it. It should show the top 5 students ranked by average progress across all their enrollments. Display the student name, number of courses enrolled, and average progress with a progress bar. Place the widget where marked on the attached screenshot. Use the existing Enrollment__c and Student__c objects. Create any needed Apex methods in the existing LearningManagementController.<button onclick="navigator.clipboard.writeText(this.parentElement.childNodes[0].textContent.trim());this.textContent='Copied!';setTimeout(()=>this.textContent='Copy',1500)" style="position: absolute; top: 8px; right: 8px; background: var(--vp-c-bg); border: 1px solid var(--vp-c-divider); border-radius: 4px; padding: 4px 8px; cursor: pointer; font-size: 12px; color: var(--vp-c-text-2);" onmouseover="this.style.borderColor='var(--vp-c-brand)'" onmouseout="this.style.borderColor='var(--vp-c-divider)'">Copy</button></div>

            <div style="margin-top: 12px;">
                <img src="./images/build-prompt.jpg" alt="Prompt with dashboard screenshot attached" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
        </div>

        <h2>Watch it build</h2>

        <div class="step-block">
            <h3><span class="step-num">2</span> Agentforce generates the code</h3>
            <p>Agentforce Vibes first retrieves the existing LWC and Apex controller from your org, then reads your org metadata through the MCP servers and starts building. Notice how it identifies issues along the way and fixes them automatically. You'll see it:</p>
            <ul>
                <li><strong>Retrieve</strong> the existing <code>learningManagementDashboard</code> LWC and <code>LearningManagementController</code> Apex class</li>
                <li><strong>Update the Apex controller</strong> — add a new method to query top learners</li>
                <li><strong>Update the LWC</strong> — add the leaderboard widget to the existing dashboard HTML, JS, and CSS</li>
            </ul>

            <div class="vp-callout tip">
                <div class="vp-callout-title">Approve requests to proceed</div>
                <p>Agentforce Vibes will ask for permission before editing or creating each file. You can approve each request to let it proceed.</p>
            </div>
        </div>

        <div class="step-block">
            <h3><span class="step-num">3</span> It even creates tests</h3>
            <p>Agentforce Vibes doesn't stop at the feature code. It also generates a test class — <code>LearningManagementControllerTest.cls</code> — with comprehensive test coverage for the new Apex method, including assertions for ranking, data validation, and edge cases.</p>

            <div style="margin-top: 12px;">
                <img src="./images/build-tests.jpg" alt="Agentforce Vibes generating Apex test class" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
        </div>

        <div class="step-block">
            <h3><span class="step-num">4</span> Deploy to sandbox</h3>
            <p>Once all tasks are complete, Agentforce Vibes will deploy the changes back to your org. You'll see it use the <code>deploy_metadata</code> tool on the Salesforce DX MCP server. Approve the request to proceed.</p>

            <div style="margin-top: 12px;">
                <img src="./images/build-deploy.jpg" alt="Agentforce Vibes deploying changes to the sandbox" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
        </div>

        <div class="vp-callout tip">
            <div class="vp-callout-title">What just happened</div>
            <p>From a single natural language prompt and a screenshot, Agentforce Vibes retrieved the existing code, updated the Apex controller and LWC component, created a test class, and deployed everything — all grounded in your org's actual metadata.</p>
        </div>

        <!-- PAGER -->
        <nav class="vp-pager">
            <a href="#/afv-walkthrough" class="prev">
                <span class="pager-label">Previous</span>
                <span class="pager-title">3. Agentforce Vibes Walkthrough</span>
            </a>
            <a href="#/deploy-verify" class="next">
                <span class="pager-label">Next</span>
                <span class="pager-title">5. Deploy &amp; Verify</span>
            </a>
        </nav>`}} />
  );
}

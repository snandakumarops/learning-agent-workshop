export default function WhatsNextPage() {
  return (
    <div dangerouslySetInnerHTML={{__html: `<h1>What's Next</h1>

        <p>You just went from a natural language prompt to a production deployment — building, testing, and promoting a new feature using Agentforce Vibes and Change Management. Here are some resources to keep going.</p>

        <h2>Resources</h2>

        <ul>
            <li><strong>Agentforce Vibes Documentation</strong> — <a href="https://developer.salesforce.com/docs/platform/agentforce-vibes/overview" target="_blank">developer.salesforce.com/docs/platform/agentforce-vibes</a></li>
            <li><strong>Salesforce DevSecOps Guide</strong> — <a href="https://www.salesforce.com/platform/resources/the-salesforce-devsecops-guide/" target="_blank">The Salesforce DevSecOps Guide</a></li>
            <li><strong>Change Management</strong> — <a href="https://help.salesforce.com/s/articleView?id=sf.change_management.htm" target="_blank">Deploy metadata between orgs</a></li>
        </ul>

        <div class="vp-callout tip">
            <div class="vp-callout-title">Thank you</div>
            <p>Thanks for joining the Agent & App Development Workshop. We'd love to hear your feedback!</p>
        </div>

        <nav class="vp-pager">
            <a href="#/promote-to-prod" class="prev">
                <span class="pager-label">Previous</span>
                <span class="pager-title">6. Promote to Production</span>
            </a>
            <a href="#/" class="next">
                <span class="pager-label">Next</span>
                <span class="pager-title">Overview</span>
            </a>
        </nav>`}} />
  );
}

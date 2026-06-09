export default function InspectAppPage() {
  return (
    <div dangerouslySetInnerHTML={{__html: `<h1>Inspect the App</h1>
        <div class="vp-time-badge">&#128339; <strong>2 minutes</strong></div>

        <p>The Learning Management app is a fully configured minimal custom application that Connected Executive Education (CEE) built on the Salesforce Platform. Before you start building with Agentforce Vibes, take a brief tour of the core building blocks.</p>

        <h2>Open the app</h2>

        <div class="step-block">
            <h3><span class="step-num">1</span> Navigate to the Learning Management app</h3>
            <p>If you haven't already, in your sandbox, click the <strong>App Launcher</strong> (the grid icon in the top left) and search for <strong>Learning Management</strong>. Click to open it.</p>
            <p>You should see the Connected Executive Education dashboard with a Course Enrollments table.</p>

            <div style="margin-top: 12px;">
                <img src="./images/dashboard-screenshot.jpg" alt="The Learning Management dashboard" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
        </div>

        <h2>Explore the data</h2>

        <p>The app is built on three custom objects that work together. Click each tab in the navigation bar to explore the data. You may need to switch the list view to <strong>All</strong> to see all the records.</p>

        <div class="step-block">
            <h3><span class="step-num">2</span> Courses</h3>
            <p>The <strong>Courses</strong> object stores all offerings in CEE's executive education catalog. Each record has a Course ID (e.g. COURSE-0012) and a Title (e.g. "Executive Leadership Essentials").</p>
            <p>Click the <strong>Courses</strong> tab to browse the catalog. There are 8 courses available.</p>

            <div style="margin-top: 12px;">
                <img src="./images/courses-list.jpg" alt="Courses list view" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
        </div>

        <div class="step-block">
            <h3><span class="step-num">3</span> Students</h3>
            <p>The <strong>Students</strong> object captures learner profiles for individuals enrolled in CEE's executive programs. Each record has a Student ID (e.g. STU-0018), Email, First Name, and Last Name.</p>
            <p>Click the <strong>Students</strong> tab to see enrolled learners. There are 12 students.</p>

            <div style="margin-top: 12px;">
                <img src="./images/students-list.jpg" alt="Students list view" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
        </div>

        <div class="step-block">
            <h3><span class="step-num">4</span> Enrollments</h3>
            <p>The <strong>Enrollments</strong> object connects students to their courses and tracks progress. Each record has an Enrollment ID (e.g. ENR-0035), a lookup to Course, Enrollment Date, Status, and a lookup to Student.</p>
            <p>Click the <strong>Enrollments</strong> tab to see how students are progressing. There are 23 enrollments.</p>

            <div style="margin-top: 12px;">
                <img src="./images/enrollments-list.jpg" alt="Enrollments list view" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>
        </div>

        <h2>The dashboard</h2>

        <div class="step-block">
            <h3><span class="step-num">5</span> Return to the dashboard</h3>
            <p>Click the <strong>Learning Management</strong> tab to return to the main dashboard. This is the page you'll be enhancing — by the end of the workshop, you'll have added a <strong>Top Learners Leaderboard</strong> widget right here.</p>

            <div style="margin-top: 12px;">
                <img src="./images/dashboard-arrow.jpg" alt="Dashboard with arrow showing where the leaderboard will go" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
            </div>

            <div class="vp-callout tip">
                <div class="vp-callout-title">Save this screenshot</div>
                <p>Right-click the image above and save it to your computer. You'll use this screenshot later to guide Agentforce Vibes on where to position the new widget on the dashboard.</p>
            </div>
        </div>

        <div class="vp-callout tip">
            <div class="vp-callout-title">What you just learned</div>
            <p>The app has three objects — <strong>Courses</strong>, <strong>Students</strong>, and <strong>Enrollments</strong> — and a dashboard that aggregates enrollment data. Agentforce Vibes will use this same metadata when you prompt it to build the leaderboard.</p>
        </div>

        <!-- PAGER -->
        <nav class="vp-pager">
            <a href="#/setup" class="prev">
                <span class="pager-label">Previous</span>
                <span class="pager-title">Setup</span>
            </a>
            <a href="#/afv-walkthrough" class="next">
                <span class="pager-label">Next</span>
                <span class="pager-title">1. Agentforce Vibes Walkthrough</span>
            </a>
        </nav>`}} />
  );
}

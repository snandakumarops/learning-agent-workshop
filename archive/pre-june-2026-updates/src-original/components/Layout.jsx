import { NavLink, Outlet } from 'react-router-dom';

function activeClass({ isActive }) {
  return isActive ? 'active' : undefined;
}

export default function Layout() {
  return (
    <>
      <nav className="vp-nav">
        <NavLink to="/" className="vp-nav-brand">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" alt="Salesforce" height="24" style={{height:'24px'}} />
          Agent &amp; App Development Workshop
        </NavLink>
      </nav>
      <div className="vp-layout">

      <aside className="vp-sidebar">
        <div className="vp-sidebar-group">
          <div className="vp-sidebar-group-title">Workshop</div>
          <ul className="vp-sidebar-items">
            <li><NavLink to="/">Overview</NavLink></li>
          </ul>
        </div>
        <div className="vp-sidebar-group">
          <div className="vp-sidebar-group-title">Before the Session</div>
          <ul className="vp-sidebar-items">
            <li><NavLink to="/setup">Setup</NavLink></li>
          </ul>
        </div>
        <div className="vp-sidebar-group">
          <div className="vp-sidebar-group-title">Hands-On</div>
          <ul className="vp-sidebar-items">
            <li><NavLink to="/inspect-app">Inspect the App</NavLink></li>
          </ul>
        </div>
        <div className="vp-sidebar-group">
          <div className="vp-sidebar-group-title">Build Flow</div>
          <ul className="vp-sidebar-items">
            <li><NavLink to="/afv-walkthrough">1. Agentforce Vibes Walkthrough</NavLink></li>
            <li><NavLink to="/build-leaderboard">2. Build the Leaderboard</NavLink></li>
            <li><NavLink to="/deploy-verify">3. Deploy &amp; Verify</NavLink></li>
            <li><NavLink to="/promote-to-prod">4. Promote to Production</NavLink></li>
          </ul>
        </div>
        <div className="vp-sidebar-group">
          <div className="vp-sidebar-group-title">Wrap Up</div>
          <ul className="vp-sidebar-items">
            <li><NavLink to="/whats-next">What&apos;s Next</NavLink></li>
            <li><NavLink to="/troubleshooting">Troubleshooting</NavLink></li>
          </ul>
        </div>
      </aside>

        <main className="vp-content">
          <Outlet />
        </main>
      </div>
    </>
  );
}

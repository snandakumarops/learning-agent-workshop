import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import IndexPage from './pages/IndexPage'
import SetupPage from './pages/SetupPage'
import InspectAppPage from './pages/InspectAppPage'
import AfvWalkthroughPage from './pages/AfvWalkthroughPage'
import BuildLeaderboardPage from './pages/BuildLeaderboardPage'
import DeployVerifyPage from './pages/DeployVerifyPage'
import PromoteToProdPage from './pages/PromoteToProdPage'
import WhatsNextPage from './pages/WhatsNextPage'
import TroubleshootingPage from './pages/TroubleshootingPage'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
  <Route path="/" element={<IndexPage />} />
  <Route path="/setup" element={<SetupPage />} />
  <Route path="/inspect-app" element={<InspectAppPage />} />
  <Route path="/afv-walkthrough" element={<AfvWalkthroughPage />} />
  <Route path="/build-leaderboard" element={<BuildLeaderboardPage />} />
  <Route path="/deploy-verify" element={<DeployVerifyPage />} />
  <Route path="/promote-to-prod" element={<PromoteToProdPage />} />
  <Route path="/whats-next" element={<WhatsNextPage />} />
  <Route path="/troubleshooting" element={<TroubleshootingPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

/* import Status from './components/Status.js'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback.js'
*/
import styled from 'styled-components';
import { Link, Route, Routes } from 'react-router-dom';
import UserStatusPage from './pages/UserStatusPage.js';
import { NavLink } from 'react-router-dom';
import NavigationPage from './pages/NavigationPage.js';
import AvailableShips from './pages/AvailableShips.js';
import Market from './pages/Market.js';
function App() {
  return (
    <div>
      <NavigationPage />
      <Routes>
        <Route path="/" element={<UserStatusPage />} />
        <Route path="/ships" element={<AvailableShips />} />
        <Route path="/market" element={<Market />} />
      </Routes>
    </div>
  );
}
export const LinkButton = styled(NavLink)`
  padding: 4px 12px;
  border: 1px solid #bbb;
  background-color: #eee;
  text-decoration: none;

  //The actual element which is selected is active
  &.active {
    background-color: hotpink;
  }
`;

export default App;

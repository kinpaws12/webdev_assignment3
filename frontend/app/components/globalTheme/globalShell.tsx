import GlobalNavigationBar from './globalNavBar';
import GlobalFooter from './globalFooter';
import Chatbox from '../Chatbox';
import { Outlet, useLocation } from 'react-router';
import NavBar from './toolBar';

export default function GlobalShell() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  return (
    <>
      {!isAuthPage && <GlobalNavigationBar/>}
      {/* <NavBar/> */}
        <main className="flex-grow-1">
          <Outlet/>
        </main>
      <GlobalFooter/>
      <Chatbox />
    </>
  );
}
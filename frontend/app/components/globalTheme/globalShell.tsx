import GlobalNavigationBar from './globalNavBar';
import GlobalFooter from './globalFooter';
import Chatbox from '../Chatbox';
import { Outlet } from 'react-router';
import NavBar from './toolBar';

<<<<<<< HEAD
interface GlobalShellProps {

}

export default function GlobalShell(props: GlobalShellProps) {
  return (
    <>
      <GlobalNavigationBar />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <GlobalFooter />
      <Chatbox />
=======
export default function GlobalShell() {
  return (
    <>
      <GlobalNavigationBar/>
      {/* <NavBar/> */}
        <main className="flex-grow-1">
          <Outlet/>
        </main>
      <GlobalFooter/>
>>>>>>> origin/develop
    </>
  );
}
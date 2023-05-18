import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Layout({ children }) {
  return (
    <>
      <MainNavigation />
      <ToastContainer position="bottom-center" limit={1} autoClose={3000} />
      <main className={classes.main}>{children}</main>
    </>
  );
}

export default Layout;

import { Outlet } from 'react-router-dom';
import Logo from "./Logo";
import styles from "./SideBar.module.css";
import AppNav from "./AppNav";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <p>List of Cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} WorldWise. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default SideBar;
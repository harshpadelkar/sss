import Link from "next/link";
import React, {
  Fragment,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import styles from "./Header.module.css";
import logo from "../assets/logo.png";
import Image from "next/image";
import MenuIcon from "../assets/MenuIcon";
import Backdrop from "../UI/Backdrop";

const Header = (props) => {
  const NavigationRef = useRef();
  //Optional
  const [isMobileNav, setIsMobileNav] = useState(false);
  const [isShowNav, setIsShowNav] = useState(false);

  useEffect(() => {
    const navWidth = NavigationRef.current.clientWidth;

    if (navWidth < 940) {
      setIsMobileNav(true);
    } else {
      setIsMobileNav(false);
    }
  }, [NavigationRef]);

  const toggleNav = () => {
    setIsShowNav(!isShowNav);
  };

  const emptyFunction = () => {
    return;
  };

  return (
    <Fragment>
      <header ref={NavigationRef} className={styles.header}>
        <Image
          style={{ color: "white" }}
          src={logo}
          alt="SSS logo"
          // width={120}
          className={styles.logo}
        />

        <nav className={`${styles.nav} ${isShowNav ? styles["nav-open"] : ""}`}>
          <ul className={styles.links}>
            <li
              onClick={isMobileNav ? toggleNav : emptyFunction}
              className={styles.link}
            >
              <Link href="/home">Edit Matches</Link>
            </li>

            <li
              onClick={isMobileNav ? toggleNav : emptyFunction}
              className={styles.link}
            >
              <Link href="/home/edit-teams">Edit Teams</Link>
            </li>

            <li
              onClick={isMobileNav ? toggleNav : emptyFunction}
              className={styles.link}
            >
              <Link href="/home/edit-tournament">Edit Tournament</Link>
            </li>

            <li
              onClick={isMobileNav ? toggleNav : emptyFunction}
              className={styles.logout}
            >
              <Link href="/">Logout</Link>
            </li>
          </ul>
        </nav>

        <div className={styles["btn-mobile-nav"]} onClick={toggleNav}>
          <MenuIcon className={`${styles.icon} ${styles.menu}`} />
        </div>
      </header>

      {isShowNav && <Backdrop onClick={toggleNav} />}
    </Fragment>
  );
};

export default Header;

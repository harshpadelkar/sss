import Link from "next/link";
import React, { useEffect, useReducer, useRef, useState } from "react";
import styles from "./Header.module.css";
import logo from "../assets/logo.png";
import Image from "next/image";
import MenuIcon from "../assets/MenuIcon";

const Header = (props) => {
  const NavigationRef = useRef();
  const [isShowNav, setIsShowNav] = useState(false);

  useEffect(() => {
    const navHeight = NavigationRef.current.clientHeight;
    console.log(navHeight);
  }, [NavigationRef]);

  const toggleNav = () => setIsShowNav(!isShowNav);

  return (
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
          <li onClick={toggleNav} className={styles.link}>
            <Link href="/home">Edit Matches</Link>
          </li>

          <li onClick={toggleNav} className={styles.link}>
            <Link href="/home/edit-teams">Edit Teams</Link>
          </li>

          <li onClick={toggleNav} className={styles.link}>
            <Link href="/home/edit-tournament">Edit Tournament</Link>
          </li>

          <li onClick={toggleNav} className={styles.logout}>
            <Link href="/">Logout</Link>
          </li>
        </ul>
      </nav>

      <div className={styles["btn-mobile-nav"]} onClick={toggleNav}>
        <MenuIcon className={`${styles.icon} ${styles.menu}`} />
      </div>
    </header>
  );
};

export default Header;

import Link from "next/link";
import React, { useEffect, useReducer, useRef, useState } from "react";
import styles from "./Header.module.css";
import logo from "../assets/logo.png";
import Image from "next/image";
import MenuIcon from "../assets/MenuIcon";

const initialActiveState = {
  matches: true,
  teams: false,
  tournament: false,
};

const activeReducer = (state, action) => {
  if (action === "teams") {
    return {
      matches: false,
      teams: true,
      tournament: false,
    };
  }

  if (action === "tournament") {
    return {
      matches: false,
      teams: false,
      tournament: true,
    };
  }

  return initialActiveState;
};

const Header = (props) => {
  const NavigationRef = useRef();
  const [isShowNav, setIsShowNav] = useState(false);
  const [activeState, dispatchActiveState] = useReducer(
    activeReducer,
    initialActiveState
  );

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

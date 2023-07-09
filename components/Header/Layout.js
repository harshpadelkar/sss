import { Fragment, useState } from "react";
import Header from "./Header";
import styles from "../Header/Layout.module.css";
import { useSelector } from "react-redux";
import MatchHeader from "./MatchHeader";

const Layout = (props) => {
  const ui = useSelector((state) => state.ui);

  return (
    <Fragment>
      {ui.showMatchHeader ? <MatchHeader /> : <Header />}
      <main className={styles.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;

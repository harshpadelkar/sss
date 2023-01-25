import React from "react";
import styles from "./NoMatches.module.css";
import logo from "../assets/logo.svg";
import Button from "../UI/Button";
import Image from "next/image";
import DivContainer from "../UI/DivContainer";
import Link from "next/link";

const NoMatches = (props) => {
  return (
    <DivContainer>
      <div className={styles.noMatches}>
        <Image
          src={logo}
          alt="Picture of the author"
          width={300}
          className={styles.logo}
        />
        <h1>{props.message}</h1>
        <p>{props.description}</p>
        <Link href="home/new-match">
          <Button className={styles.addMatchButton}>{props.button}</Button>
        </Link>
      </div>
    </DivContainer>
  );
};

export default NoMatches;

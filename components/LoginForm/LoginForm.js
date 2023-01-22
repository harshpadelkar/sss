import Link from "next/link";
import React from "react";
import styles from "./LoginForm.module.css";

const LoginForm = (props) => {
  return (
    <div className={styles.center}>
      <form>
        <div className={styles["txt_field"]}>
          <input type="text" />
          <span></span>
          <label>Username</label>
        </div>
        <div className={styles["txt_field"]}>
          <input type="password" />
          <span></span>
          <label>Password</label>
        </div>

        <div className={styles.pass}>Forgot Password?</div>

        <button className={styles.button}>Sign In</button>

        <div className={styles["signup_link"]}>
          Not a member? <a href="#">Signup</a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

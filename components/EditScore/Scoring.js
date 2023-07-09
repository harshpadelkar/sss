import React, { Fragment } from "react";
import styles from "./Scoring.module.css";

const Scoring = (props) => {
  return (
    <section className={styles["score-section"]}>
      <div className={styles.container}>
        <div className={styles.battingScore}>
          <h3>Royal chembur</h3>
          <p>1st Innings</p>
          <h1>18-0</h1>
        </div>

        <div className={styles.scoreSummary}>
          <div className={styles.batsmen}>
            <div id={styles.striker} className={styles.batsman}>
              <div className={styles.input}>Select Batsman</div>
              {/* <input placeholder="Select Batsman" type="text" /> */}
              <div className={styles.batsmanDetails}>
                <p>
                  {0}({0})
                </p>
                <button>Details</button>
              </div>
            </div>

            <div id={styles.nonStriker} className={styles.batsman}>
              {/* <input placeholder="Select Batsman" type="text" /> */}
              <div className={styles.input}>Select Batsman</div>
              <div className={styles.batsmanDetails}>
                <p>
                  {0}({0})
                </p>
                <button>Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scoring;

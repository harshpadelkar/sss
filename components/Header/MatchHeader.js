import styles from "./MatchHeader.module.css";
import ArrowIcon from "../../public/ArrowIcon";

const MatchHeader = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <ArrowIcon />
        <p>Match Centre</p>
      </div>

      <ul className={styles.list}>
        <li className={styles.active}>Scoring</li>
        <li>Scorecard</li>
        <li>Balls</li>
        <li>Deatails</li>
      </ul>
    </header>
  );
};

export default MatchHeader;

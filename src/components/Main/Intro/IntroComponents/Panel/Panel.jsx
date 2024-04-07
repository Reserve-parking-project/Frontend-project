import DateLogo from "../../../../../assets/image/Date.svg";
import TimeLogo from "../../../../../assets/image/Time.svg";

import styles from "./Panel.module.scss";

export default function PanelBlock({ title, date, time }) {
  return (
    <div className={styles.panel}>
      <h6>{title}</h6>
      <div className={styles.panel__content}>
        <img src={DateLogo} alt="Logo date" />
        <p>{date}</p>
        <img src={TimeLogo} alt="Time logo" />
        <p>{time}</p>
      </div>
    </div>
  );
}
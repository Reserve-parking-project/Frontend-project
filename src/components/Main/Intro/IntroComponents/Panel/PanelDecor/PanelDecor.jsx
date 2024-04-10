import DateLogo from "../../../../../../assets/image/Date.svg";
import TimeLogo from "../../../../../../assets/image/Time.svg";

import styles from "./PanelDecor.module.scss";

export default function PanelDecor({ title, date, time }) {
  return (
    <div className={styles.panelDecor}>
      <h6>{title}</h6>
      <div className={styles.panelDecor__content}>
        <div className={styles.panelDecor__info}>
          <img src={DateLogo} alt="Logo date" />
          <p>{date}</p>
        </div>
        <div className={styles.panelDecor__info}>
          <img src={TimeLogo} alt="Time logo" />
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
}

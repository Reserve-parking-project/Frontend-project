import DateLogo from "../../../../../../assets/image/Date.svg";
import TimeLogo from "../../../../../../assets/image/Time.svg";

import styles from "./InputPanel.module.scss";

export default function InputPanel({ title, date, time }) {
  return (
    <div className={styles.inputPanel}>
      <h6>{title}</h6>
      <div className={styles.inputPanel__content}>
        <div className={styles.inputPanel__info}>
          <img src={DateLogo} alt="Logo date" />
          <div className={styles.inputPanel__date}>
            <input type="text" placeholder="31" maxLength={2} />
            <p>/</p>
            <input type="text" placeholder="12" maxLength={2} />
            <p>/</p>
            <input type="text" placeholder="24" maxLength={2} />
          </div>
        </div>
        <div className={styles.inputPanel__info}>
          <img src={TimeLogo} alt="Time logo" />
          <input type="time" />
        </div>
      </div>
    </div>
  );
}

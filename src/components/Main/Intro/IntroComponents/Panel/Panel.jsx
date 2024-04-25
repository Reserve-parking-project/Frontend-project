import styles from "./Panel.module.scss";
import { useState } from "react";

import MapLogo from "../../../../../assets/image/MapLogo.svg";
import ArrayLogo from "../../../../../assets/image/Frame.svg";

import InputPanel from "./InputPanel/InputPanel.jsx";

export default function Panel() {
  const [inputValue, setInputValue] = useState("");

  function trackingUserInput(event) {
    setInputValue(event.target.value);
  }
  return (
    <div className={styles.panel}>
      <div>
        <input
          type="text"
          placeholder="Address, place or city"
          onChange={trackingUserInput}
          value={inputValue}
          className={styles.panel__input}
        />

        <img src={MapLogo} alt="Logo map" />
      </div>
      <InputPanel title="Arrival" date="30/03/2024" time="11:00" />
      <img
        className={styles.panel__icon}
        src={ArrayLogo}
        alt="Logo arrayLogo"
      />
      <InputPanel title="Departure" date="30/03/2024" time="13:00" />
      <div className={styles.panel__searching}>
        <button type="button" className={styles.panel__button}>
          Search
        </button>
      </div>
    </div>
  );
}

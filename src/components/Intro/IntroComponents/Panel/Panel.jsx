import { Link } from "react-router-dom";
import { useState } from "react";

import InputPanel from "./InputPanel/InputPanel.jsx";

import MapLogo from "../../../../assets/image/MapLogo.svg";
import ArrayLogo from "../../../../assets/image/Frame.svg";

import styles from "./panel.module.scss";

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
        <Link to="/search" className={styles.panel__button}>
          Search
        </Link>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { useState } from "react";

import InputPanel from "./InputPanel/InputPanel.jsx";

import mapLogo from "../../../../assets/image/MapLogo.svg";
import arrayLogo from "../../../../assets/image/Frame.svg";

import styles from "./panel.module.scss";

export default function Panel() {
  const [inputValue, setInputValue] = useState("");

  function trackingUserInput(event) {
    setInputValue(event.target.value);
  }

  return (
    <div className={styles.panel}>
      <div className={styles.panel__input}>
        <input
          type="text"
          placeholder="Address, place or city"
          onChange={trackingUserInput}
          value={inputValue}
        />

        <img src={mapLogo} alt="Mini map" />
      </div>

      <InputPanel title="Arrival" />

      <img
        className={styles.panel__icon}
        src={arrayLogo}
        alt="Array to right"
      />

      <InputPanel title="Departure" />

      <div className={styles.panel__searching}>
        <Link to="/search" className={styles.panel__button}>
          Search
        </Link>
      </div>
    </div>
  );
}

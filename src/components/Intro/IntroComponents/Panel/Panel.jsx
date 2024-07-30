import { Link } from "react-router-dom";
import { useState } from "react";

import ActionsPanel from "./ActionsPanel/ActionsPanel.jsx";
import { Icon } from "../../..//UI";

import s from "./panel.module.scss";

export default function Panel() {
  const [inputValue, setInputValue] = useState("");

  function trackingUserInput(event) {
    setInputValue(event.target.value);
  }

  return (
    <div className={s.panel}>
      <div className={s.panel__input}>
        <input
          type="text"
          placeholder="Address, place or city"
          onChange={trackingUserInput}
          value={inputValue}
        />

        <Icon name="mapLogo" className={s["panel__input-icon"]} />
      </div>

      <ActionsPanel title="Arrival" />

      <Icon className={s.panel__icon} name="frame" />

      <ActionsPanel title="Departure" />

      <div className={s.panel__searching}>
        <Link to="/search" className={s.panel__button}>
          Search
        </Link>
      </div>
    </div>
  );
}

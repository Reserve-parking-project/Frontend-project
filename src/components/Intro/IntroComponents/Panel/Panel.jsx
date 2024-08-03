import { Link } from "react-router-dom";

import PanelInput from "./PanelInput.jsx";
import ActionsPanel from "./ActionsPanel/ActionsPanel.jsx";
import { Button, Icon } from "src/components/UI";

import s from "./panel.module.scss";

export default function Panel() {
  return (
    <div className={s.panel}>
      <div className={s.panel__input}>
        <PanelInput />
        <Icon name="mapLogo" className={s["panel__input-icon"]} />
      </div>

      <ActionsPanel title="Arrival" />

      <Icon className={s.panel__icon} name="frame" />

      <ActionsPanel title="Departure" />

      <div className={s.panel__searching}>
        <Button className={s.panel__button}>
          <Link to="/search?booking=single">Search</Link>
        </Button>
      </div>
    </div>
  );
}

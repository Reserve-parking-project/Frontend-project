import styles from "./Panel.module.scss";

import MapLogo from "../../../../../assets/image/MapLogo.svg";
import ArrayLogo from "../../../../../assets/image/Frame.svg";

import PanelDecor from "./PanelDecor/PanelDecor.jsx";

export default function Panel() {
  return (
    <div className={styles.panel}>
      <p>Address, place or city</p>
      <img src={MapLogo} alt="Logo map" />
      <PanelDecor title="Arrival" date="30/03/2024" time="11:00" />
      <img src={ArrayLogo} alt="Logo arrayLogo" />
      <PanelDecor title="Departure" date="30/03/2024" time="13:00" />
      <div className={styles.decor}></div>
    </div>
  );
}

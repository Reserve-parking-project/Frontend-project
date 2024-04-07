import styles from "./Intro.module.scss";
import IntroItem from "./IntroComponents/IntroItem";
import Panel from "./IntroComponents/Panel/Panel";

import MapLogo from "../../../assets/image/MapLogo.svg";
import ArrayLogo from "../../../assets/image/Frame.svg";

export default function Intro() {
  return (
    <section className={styles.intro}>
      <div className="intro__container">
        <div className={styles.intro__body}>
          <h1 className={styles.intro__title}>Reserve Parking Now & Save</h1>

          <div className={styles.intro__content}>
            <h6>Select what type of parking you’re looking for: </h6>

            <div className={styles.intro__items}>
              <IntroItem>Hourly</IntroItem>
              <IntroItem>Monthly</IntroItem>
              <IntroItem>Airport</IntroItem>
            </div>

            <div className={styles.intro__panel}>
              <p>Address, place or city</p>
              <img src={MapLogo} alt="Logo map" />
              <Panel title="Arrival" date="30/03/2024" time="11:00" />
              <img src={ArrayLogo} alt="Logo arrayLogo" />
              <Panel title="Departure" date="30/03/2024" time="13:00" />
              <div className={styles.decor}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

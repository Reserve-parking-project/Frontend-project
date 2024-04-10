import styles from "./IntroContent.module.scss";

import IntroItem from "../IntroItem.jsx";
import Panel from "../Panel/Panel";

export default function IntroContent() {
  return (
    <div className={styles.content}>
      <h6>Select what type of parking you’re looking for: </h6>

      <div className={styles.items}>
        <IntroItem>Hourly</IntroItem>
        <IntroItem>Monthly</IntroItem>
        <IntroItem>Airport</IntroItem>
      </div>

      <Panel />
    </div>
  );
}

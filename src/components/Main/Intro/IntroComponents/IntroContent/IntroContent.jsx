import classes from "./IntroContent.module.scss";

import IntroItem from "../../IntroItem.jsx";
import Panel from "../Panel/Panel";

export default function IntroContent() {
  return (
    <div className={classes.content}>
      <h6>Select what type of parking you’re looking for: </h6>

      <div className={classes.items}>
        <IntroItem>
          <p>Hourly</p>
        </IntroItem>
        <IntroItem>
          <p>Monthly</p>
        </IntroItem>
        <IntroItem>
          <p>Airport</p>
        </IntroItem>
      </div>

      <Panel />
    </div>
  );
}

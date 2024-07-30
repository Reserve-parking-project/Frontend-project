import IntroItem from "./IntroItem.jsx";
import Panel from "../Panel/Panel";
import { introContent } from "../../../../constants";

import s from "./introContent.module.scss";

export default function IntroContent() {
  return (
    <div className={s.content}>
      <h6>Select what type of parking you’re looking for: </h6>

      <div className={s.items}>
        {introContent.map((item) => (
          <IntroItem key={item}>
            <p>{item}</p>
          </IntroItem>
        ))}
      </div>

      <Panel />
    </div>
  );
}

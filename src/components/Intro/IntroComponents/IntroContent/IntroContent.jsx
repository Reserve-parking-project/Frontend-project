import IntroItem from "./IntroItem.jsx";
import Panel from "../Panel/Panel";
import { introContent } from "src/constants";

import s from "./introContent.module.scss";

export default function IntroContent() {
  return (
    <div className={s.content}>
      <div className={s.content__items}>
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

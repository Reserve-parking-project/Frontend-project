import MapItem from "./MapItem/MapItem";
import MapComponent from "./MapComponent/MapComponent";

import { blockWithMap } from "src/constants";

import s from "./blockWithMap.module.scss";

export default function BlockWithMap() {
  return (
    <div className={s.mapBlock}>
      <div className={s.mapBlock__body}>
        <div className={s["mapBlock__block-map"]}>
          <MapComponent />
        </div>

        <div className={s.mapBlock__items}>
          {blockWithMap.map((item) => (
            <MapItem
              title={item.title}
              text={item.text}
              buttonText={item.buttonText}
              key={item.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

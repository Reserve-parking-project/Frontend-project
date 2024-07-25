import MapItem from "./MapItem/MapItem";

import { blockWithMapInfo } from "../../constants";

import s from "./blockWithMap.module.scss";

export default function BlockWithMap() {
  return (
    <div className={s.map}>
      <div className={s.map__body}>
        <div className={s.map__block}></div>

        <div className={s.map__items}>
          {blockWithMapInfo.map((item) => (
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

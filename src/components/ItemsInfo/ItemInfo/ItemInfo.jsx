import { Icon } from "src/components/UI";

import s from "./itemInfo.module.scss";

export default function ItemInfo(objectValues) {
  const { pictureText, pictureUrl, infoIcon, infoText } = objectValues;

  return (
    <div className={s.item}>
      <div className={s.item__picture}>
        <img src={pictureUrl} alt={pictureText} loading="lazy" />
        <p>{pictureText}</p>
      </div>

      <div className={s.item__card}>
        <Icon name={infoIcon} className={s.item__icon} />
        <p>{infoText}</p>
      </div>
    </div>
  );
}

import sprite from "../../../../public/sprite.svg";

import s from "./icon.module.scss";

export default function Icon({ className, name }) {
  return (
    <svg className={`${s.icon} ${className}`}>
      <use href={`${sprite}#${name}`}></use>
    </svg>
  );
}

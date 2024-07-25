import s from "./header.module.scss";

export default function HeaderBurger({ handleClickActive, stateButton }) {
  return (
    <div
      onClick={handleClickActive}
      className={
        !stateButton ? `${s.header__burger}` : `${s.header__burger} ${s.active}`
      }
    >
      <span></span>
    </div>
  );
}

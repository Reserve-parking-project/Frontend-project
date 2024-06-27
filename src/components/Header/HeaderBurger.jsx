import classes from "./header.module.scss";

export default function HeaderBurger({ handleClickActive, stateButton }) {
  return (
    <div
      onClick={handleClickActive}
      className={
        !stateButton
          ? `${classes.header__burger}`
          : `${classes.header__burger} ${classes.active}`
      }
    >
      <span></span>
    </div>
  );
}

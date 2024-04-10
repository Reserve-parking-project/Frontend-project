export default function HeaderBurger({ handleClickActive, stateButton }) {
  return (
    <div
      onClick={handleClickActive}
      className={!stateButton ? "header__burger" : "header__burger active"}
    >
      <span></span>
    </div>
  );
}

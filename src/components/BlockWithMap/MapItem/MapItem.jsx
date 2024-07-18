import classes from "./mapItem.module.scss";

export default function MapItem({ title, text, buttonText }) {
  return (
    <div className={classes.item}>
      <h6 className={classes.item__title}>{title}</h6>
      <p>{text}</p>
      <button>{buttonText}</button>
    </div>
  );
}

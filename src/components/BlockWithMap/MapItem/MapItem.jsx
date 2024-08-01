import s from "./mapItem.module.scss";

export default function MapItem({ title, text, buttonText }) {
  return (
    <div className={s.item}>
      <h6 className={s.item__title}>{title}</h6>
      <p>{text}</p>
      <button>{buttonText}</button>
    </div>
  );
}

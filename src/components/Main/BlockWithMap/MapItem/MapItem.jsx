import styles from "./MapItem.module.scss";

export default function MapItem({ title, text, buttonText }) {
  return (
    <div className={styles.item}>
      <h6 className={styles.item__title}>{title}</h6>
      <p>{text}</p>
      <button>{buttonText}</button>
    </div>
  );
}

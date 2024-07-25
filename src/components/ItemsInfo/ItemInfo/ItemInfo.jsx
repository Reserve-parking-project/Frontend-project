import styles from "./ItemInfo.module.scss";

export default function ItemInfo(objectValues) {
  const { pictureText, pictureUrl, infoIcon, infoText } = objectValues;

  return (
    <div className={styles.item}>
      <div className={styles.item__picture}>
        <img src={pictureUrl} alt={pictureText} />
        <p>{pictureText}</p>
      </div>

      <div className={styles.item__card}>
        <img src={infoIcon} alt={infoText} />
        <p>{infoText}</p>
      </div>
    </div>
  );
}

import styles from "./ItemInfo.module.scss";

export default function ItemInfo(objectValues) {
  return (
    <div className={styles.item}>
      <div className={styles.item__picture}>
        <div>
          <img src={objectValues.pictureUrl} alt={objectValues.pictureText} />
        </div>
        <p>{objectValues.pictureText}</p>
      </div>

      <div className={styles.item__card}>
        <img src={objectValues.infoIcon} alt={objectValues.infoText} />
        <p>{objectValues.infoText}</p>
      </div>
    </div>
  );
}

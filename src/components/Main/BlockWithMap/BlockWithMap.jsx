import styles from "./BlockWithMap.module.scss";
import MapItem from "./MapItem/MapItem";

export default function BlockWithMap() {
  return (
    <div className={styles.map}>
      <div className={styles.map__body}>
        <div className={styles.map__block}></div>
        <div className={styles.map__items}>
          <MapItem
            title="Airport Parking"
            text="Look for the top parking discounts close to the airport, compare rates, and secure your spot in advance."
            buttonText="View All Airports"
          />
          <MapItem
            title="Monthly parking"
            text="Look for secure
            monthly parking 
            spots that facilitate
            parking near your
            home or office."
            buttonText="View All Cities"
          />
          <MapItem
            title="Event Parking"
            text="Secure your parking spot in advance for hassle-free arrival at games, concerts, and events."
            buttonText="View all Stadiums"
          />
        </div>
      </div>
    </div>
  );
}

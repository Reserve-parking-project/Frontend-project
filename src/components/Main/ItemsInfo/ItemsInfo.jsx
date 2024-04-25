import styles from "./ItemsInfo.module.scss";

import ItemInfo from "./ItemInfo/ItemInfo";

// AirPort item
import airportImage from "../../../assets/image/ItemsInfo/Picture/airport.jpg";
import dollarIcon from "../../../assets/image/ItemsInfo/Icon/Business.svg";

// Station item
import stationImage from "../../../assets/image/ItemsInfo/Picture/station.jpg";
import dandruffIcon from "../../../assets/image/ItemsInfo/Icon/dandruff.svg";

// City item
import cityImage from "../../../assets/image/ItemsInfo/Picture/city.jpg";
import businessIcon from "../../../assets/image/ItemsInfo/Icon/Business.svg";

export default function ItemsInfo() {
  return (
    <>
      <div className={styles.items}>
        <div className={styles.items__body}>
          <ItemInfo
            pictureText="Airport"
            pictureUrl={airportImage}
            infoIcon={dollarIcon}
            infoText="Securely pay for and instantly receive a prepaid parking pass via email."
          />
          <ItemInfo
            pictureText="Station"
            pictureUrl={stationImage}
            infoIcon={dandruffIcon}
            infoText="Search and compare prices at thousands of parking facilities in your city."
          />
          <ItemInfo
            pictureText="Airport"
            pictureUrl={cityImage}
            infoIcon={businessIcon}
            infoText="When you arrive, follow your pass instructions, park, and enjoy!"
          />
        </div>
      </div>
    </>
  );
}

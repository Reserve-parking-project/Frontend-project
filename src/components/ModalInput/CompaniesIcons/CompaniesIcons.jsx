import styles from "./CompaniesIcons.module.scss";

import googleIcon from "../../../assets/image/IconForm/Brands/google.svg";
import facebook from "../../../assets/image/IconForm/Brands/facebook.svg";
import messenger from "../../../assets/image/IconForm/Brands/facebook messenger.svg";

import IconComponent from "./IconComponent.jsx";

export default function CompaniesIcons() {
  return (
    <div className={styles.icons}>
      <IconComponent
        imageUrl={googleIcon}
        text="Google icon"
        className={styles.google__icon}
      />
      <IconComponent
        imageUrl={facebook}
        text="Facebook icon"
        className={styles.facebook__icon}
      />
      <IconComponent
        imageUrl={messenger}
        text="Messenger icon"
        className={styles.messenger__icon}
      />
    </div>
  );
}

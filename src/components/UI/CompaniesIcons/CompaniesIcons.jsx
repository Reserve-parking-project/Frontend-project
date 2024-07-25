import IconComponent from "./IconComponent.jsx";

import googleIcon from "../../../assets/image/IconForm/Brands/google.svg";
import facebook from "../../../assets/image/IconForm/Brands/facebook.svg";
import messenger from "../../../assets/image/IconForm/Brands/facebook messenger.svg";

import s from "./companiesIcons.module.scss";

export default function CompaniesIcons() {
  return (
    <div className={s.icons}>
      <IconComponent
        imageUrl={googleIcon}
        text="Google icon"
        className={s.google__icon}
      />
      <IconComponent
        imageUrl={facebook}
        text="Facebook icon"
        className={s.facebook__icon}
      />
      <IconComponent
        imageUrl={messenger}
        text="Messenger icon"
        className={s.messenger__icon}
      />
    </div>
  );
}

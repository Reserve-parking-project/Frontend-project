import IconComponent from "./IconComponent.jsx";
import { companiesIcons } from "../../../constants";

import s from "./companiesIcons.module.scss";

export default function CompaniesIcons() {
  return (
    <div className={s.icons}>
      {companiesIcons.map((item) => {
        const { imageName, text, className } = item;

        return (
          <IconComponent
            key={text}
            imageName={imageName}
            text={text}
            className={s[`${className}`]}
          />
        );
      })}
    </div>
  );
}

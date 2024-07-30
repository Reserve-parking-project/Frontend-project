import { Link } from "react-router-dom";
import { Icon } from "../../UI";

import s from "./arrowExit.module.scss";

const ArrowExit = ({ ...props }) => {
  return (
    <button type="button" {...props}>
      <Link to="/" className={s.arrow}>
        <Icon name="arrow" />
      </Link>
    </button>
  );
};

export default ArrowExit;

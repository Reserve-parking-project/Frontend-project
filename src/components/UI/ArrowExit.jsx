import { Link } from "react-router-dom";
import arrowIcon from "../../assets/image/arrow.svg";

const ArrowExit = ({ ...props }) => {
  return (
    <Link {...props} to={"/"}>
      <img src={arrowIcon} alt="Arrow for exit" />
    </Link>
  );
};

export default ArrowExit;

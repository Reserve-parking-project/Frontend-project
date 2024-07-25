import { Link } from "react-router-dom";

export default function HeaderItem({ children, path }) {
  return (
    <li>
      <Link to={path}>{children}</Link>
    </li>
  );
}

export default function HeaderItem({ children }) {
  return (
    <li className="header__item">
      <a href="#" className="header__item">
        {children}
      </a>
    </li>
  );
}

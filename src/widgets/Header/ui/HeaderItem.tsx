import { FC, ReactNode } from 'react';

import { Link } from 'react-router-dom';

const HeaderItem: FC<{ children: ReactNode; path: string }> = ({ children, path }) => {
  return (
    <li>
      <Link to={path}>{children}</Link>
    </li>
  );
};

export default HeaderItem;

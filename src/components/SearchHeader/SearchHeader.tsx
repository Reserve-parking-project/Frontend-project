import { Link } from 'react-router-dom';

import { Icon } from '../../shared/ui';

import s from './searchHeader.module.scss';

export default function SearchHeader() {
  return (
    <header className={s.header}>
      <div className={s.header_body}>
        <Link to="/" className={s.header_title}>
          LOGO
        </Link>
        <Icon name="icon-language" className={s.header_icon} />
      </div>
    </header>
  );
}

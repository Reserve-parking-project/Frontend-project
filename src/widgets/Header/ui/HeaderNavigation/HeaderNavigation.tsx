import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'src/shared/hooks/reduxHooks';

import HeaderItem from '../HeaderItem';

import s from './headerNavigation.module.scss';

const HeaderNavigation: FC<{ isActive: boolean }> = ({ isActive }) => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  const activeBodyScroll = () => {
    document.body.classList.remove('no-scroll');
  };

  return (
    <nav className={!isActive ? `${s.header__menu}` : `${s.header__menu} ${s.active}`}>
      <div className={s['header__menu-body']}>
        <ul>
          <HeaderItem path="/how-work">How does it work?</HeaderItem>
          <HeaderItem path="/contact-us">Contact us</HeaderItem>
        </ul>

        {!isAuth && (
          <Link
            onClick={activeBodyScroll}
            className={s['header__list-link']}
            to="authentication?mode=login"
          >
            Log in
          </Link>
        )}
      </div>
    </nav>
  );
};

export default HeaderNavigation;

import { useState, useEffect } from 'react';

import HeaderBurger from './ui/HeaderBurger';
import HeaderNavigation from './ui/HeaderNavigation/HeaderNavigation';
import { useIsActiveMenu } from 'src/features/header/useIsActiveMenu';

import s from './header.module.scss';

export default function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { handleClickActive, isActiveBurgerMenu } = useIsActiveMenu();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={
        !isActiveBurgerMenu
          ? scrolled
            ? `${s.header} ${s.scroll}`
            : `${s.header}`
          : `${s.header} ${s.active}`
      }
    >
      <div className="container">
        <div className={s.header__body}>
          <a href="#" className={s.header__logo}>
            {/* <img src="#" alt="Header logo" /> */}
          </a>

          <HeaderBurger handleClickActive={handleClickActive} stateButton={isActiveBurgerMenu} />

          <HeaderNavigation isActive={isActiveBurgerMenu} />
        </div>
      </div>
    </header>
  );
}

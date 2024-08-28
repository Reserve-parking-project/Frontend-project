import { useState } from 'react';

export function useIsActiveMenu() {
  const [isActiveBurgerMenu, setIsActiveBurgerMenu] = useState<boolean>(false);

  function handleClickActive() {
    if (!isActiveBurgerMenu) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    setIsActiveBurgerMenu((prevState) => !prevState);
  }

  return { isActiveBurgerMenu, handleClickActive };
}

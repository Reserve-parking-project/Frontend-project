import { FC } from 'react';

import s from '../header.module.scss';

const HeaderBurger: FC<{ handleClickActive: () => void; stateButton: boolean }> = ({
  handleClickActive,
  stateButton,
}) => {
  return (
    <div
      onClick={handleClickActive}
      className={!stateButton ? `${s.header__burger}` : `${s.header__burger} ${s.active}`}
    >
      <span></span>
    </div>
  );
};

export default HeaderBurger;

import { FC } from 'react';
import sprite from 'src/../public/sprite.svg';

import s from './icon.module.scss';

const Icon: FC<{ className: string; name: string }> = ({ className, name }) => {
  return (
    <svg className={`${s.icon} ${className}`}>
      <use href={`${sprite}#${name}`}></use>
    </svg>
  );
};

export default Icon;

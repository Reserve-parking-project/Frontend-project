import { FC } from 'react';
import s from './mapItem.module.scss';

const MapItem: FC<{ title: string; text: string; buttonText: string }> = ({
  title,
  text,
  buttonText,
}) => {
  return (
    <div className={s.item}>
      <h6 className={s.item__title}>{title}</h6>
      <p>{text}</p>
      <button>{buttonText}</button>
    </div>
  );
};

export default MapItem;

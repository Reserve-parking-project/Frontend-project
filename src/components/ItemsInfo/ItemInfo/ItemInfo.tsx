import { FC } from 'react';

import { Icon } from 'src/shared/ui';

import s from './itemInfo.module.scss';

import type { ItemInfoProps } from './types';

const ItemInfo: FC<ItemInfoProps> = (objectValues) => {
  const { pictureText, pictureUrl, infoIcon, infoText } = objectValues;

  return (
    <div className={s.item}>
      <div className={s.item__picture}>
        <img src={pictureUrl} alt={pictureText} loading="lazy" />
        <p>{pictureText}</p>
      </div>

      <div className={s.item__card}>
        <Icon name={infoIcon} className={s.item__icon} />
        <p>{infoText}</p>
      </div>
    </div>
  );
};

export default ItemInfo;

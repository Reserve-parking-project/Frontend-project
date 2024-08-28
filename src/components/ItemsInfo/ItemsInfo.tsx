import ItemInfo from './ItemInfo/ItemInfo';
import { itemsInfo } from 'src/shared/constants';

import s from './itemsInfo.module.scss';

const ItemsInfo = () => {
  return (
    <>
      <div className={s.items}>
        <div className={s.items__body}>
          {itemsInfo.map((item) => {
            const { pictureText, pictureUrl, infoIcon, infoText } = item;

            return (
              <ItemInfo
                key={pictureText}
                pictureText={pictureText}
                pictureUrl={pictureUrl}
                infoIcon={infoIcon}
                infoText={infoText}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ItemsInfo;

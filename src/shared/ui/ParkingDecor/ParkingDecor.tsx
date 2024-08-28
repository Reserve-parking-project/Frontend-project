import { FC, ReactNode } from 'react';
import { Icon } from '..';

import s from './parkingDecor.module.scss';

const ParkingDecor: FC<{ urlCar: string; children: ReactNode; props: Record<string, any> }> = ({
  urlCar,
  children,
  ...props
}) => {
  return (
    <div {...props}>
      {children}
      <div className={s.icon}>
        <Icon name="parking" className={s.svg} />
      </div>
    </div>
  );
};
export default ParkingDecor;

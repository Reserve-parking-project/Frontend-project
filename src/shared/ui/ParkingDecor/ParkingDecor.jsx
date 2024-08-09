import { Icon } from '..';

import s from './parkingDecor.module.scss';

const ParkingDecor = ({ urlCar, children, ...props }) => {
  return (
    <div {...props}>
      {children}
      <div className={s.icon}>
        <Icon name="parking" />
      </div>
    </div>
  );
};
export default ParkingDecor;

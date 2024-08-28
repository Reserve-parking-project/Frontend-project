import { FC } from 'react';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';

import s from './actionsPanel.module.scss';

const ActionsPanel: FC<{ title: string }> = ({ title }) => {
  return (
    <div className={s.actionsPanel}>
      <h6>{title}</h6>

      <div className={s.actionsPanel__content}>
        <div className={s.actionsPanel__info}>
          <DatePicker name="date" />
        </div>

        <div className={s.actionsPanel__info}>
          <TimePicker />
        </div>
      </div>
    </div>
  );
};

export default ActionsPanel;

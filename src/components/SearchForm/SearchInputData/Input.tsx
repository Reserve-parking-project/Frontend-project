import { ChangeEvent, FC, useRef, useState } from 'react';
import { format, parseISO } from 'date-fns';

import { Icon, SearchInput } from 'src/shared/ui';

import s from './searchInputData.module.scss';

const Input: FC<{ type: string; nameIcon: string; initState: string }> = ({
  type,
  nameIcon,
  initState,
}) => {
  const userData = useRef<HTMLInputElement>(null);

  const [date, setDate] = useState(initState);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    if (type === 'date') {
      const data = event.target.value;

      const formattedDate = data ? format(parseISO(data), 'eee, MMM d') : '';
      setDate(formattedDate);
    } else {
      setDate(event.target.value);
    }
  }

  function handleClickDate() {
    if (userData.current) {
      userData.current.showPicker();
    }
  }

  return (
    <div className={s.inputData_input}>
      <p>{date}</p>
      <SearchInput ref={userData} type={type} name={type} onChange={handleInputChange} />

      <button type="button" onClick={handleClickDate}>
        <Icon name={nameIcon} />
      </button>
    </div>
  );
};

export default Input;

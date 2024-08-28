import Input from './Input';

import s from './searchInputData.module.scss';

const SearchInputData = ({ text }: { text: string }) => {
  return (
    <div className={s.inputData}>
      <p className={s.inputData_text}>{text}</p>

      <Input type="date" nameIcon="calendar" initState="Thu, May 23" />

      <Input type="time" nameIcon="searchTime" initState="8:00 am" />
    </div>
  );
};

export default SearchInputData;

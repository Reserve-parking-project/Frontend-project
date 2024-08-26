import { SearchHeader, SearchMap, SearchPanel } from 'src/components';

import s from './searchParking.module.scss';

const SearchingBooking = () => {
  return (
    <>
      <SearchHeader />

      <main className={s.main}>
        <SearchPanel />
        <SearchMap />
      </main>
    </>
  );
};

export default SearchingBooking;

import { SearchHeader } from "src/components";
import SearchMap from "src/components/SearchMap/SearchMap";
import SearchPanel from "src/components/SearchPanel/SearchPanel";

import s from "./searchParking.module.scss";

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

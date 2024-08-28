import { Link } from 'react-router-dom';
import SearchInputData from './SearchInputData/SearchInputData';

import s from './searchForm.module.scss';
import { Button } from '../../shared/ui';

export default function SearchForm() {
  return (
    <form className={s.form}>
      <div className={s.form_input}>
        <label htmlFor="streetInput">Book Parking Near</label>
        <input placeholder="Street Address" id="streetInput" name="streetInput" type="text" />
      </div>

      <div className={s.form_inputs}>
        <SearchInputData text={'Enter After'} />
        <SearchInputData text={'Exit Before'} />
      </div>

      <div className={s.form_tabs}>
        <Button className={s['form_tabs-submit']}>Search</Button>
        <button type="button" className={s['form_tabs-cancel']}>
          <Link to="/">Cancel</Link>
        </button>
      </div>
    </form>
  );
}

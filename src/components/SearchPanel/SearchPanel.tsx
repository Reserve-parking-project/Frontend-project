import { SearchForm } from '..';
import { SearchPanelHeader, SearchTabs } from '../../shared/ui';

import s from './searchPanel.module.scss';

export default function SearchPanel() {
  return (
    <div className={s.panel}>
      <SearchPanelHeader />
      <SearchTabs />
      <SearchForm />

      <div className={s.panel_filter}>
        <button type="button">
          Filter <span></span>
        </button>
      </div>
    </div>
  );
}

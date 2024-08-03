import { SearchForm } from "..";
import { SearchPanelHeader, SearchTabs } from "../UI";

import s from "./searchPanel.module.scss";

export default function SearchPanel() {
  return (
    <div className={s.panel}>
      <SearchPanelHeader />
      <SearchTabs />
      <SearchForm />
    </div>
  );
}

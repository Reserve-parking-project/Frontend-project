import s from "./searchPanelHeader.module.scss";

export default function SearchPanelHeader() {
  return (
    <div className={s.panelHeader}>
      <p className={s.panelHeader_title}>Hourly</p>
      <p className={s.panelHeader_text}>
        City <span> - Street</span>
      </p>
    </div>
  );
}

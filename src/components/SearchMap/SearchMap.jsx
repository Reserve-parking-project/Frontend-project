import MapBlock from "../BlockWithMap/MapBlock";

import s from './searchMap.module.scss';

export default function SearchMap() {
  return (
    <div className={s.map}>
      <MapBlock />
    </div>
  );
}

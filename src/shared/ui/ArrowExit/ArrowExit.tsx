import { Link } from 'react-router-dom';
import { Icon } from '..';

import s from './arrowExit.module.scss';

const ArrowExit = ({ ...props }) => {
  return (
    <button type="button" {...props}>
      <Link to="/" className={s.arrow}>
        <Icon name="arrow" className={s.svg} />
      </Link>
    </button>
  );
};

export default ArrowExit;

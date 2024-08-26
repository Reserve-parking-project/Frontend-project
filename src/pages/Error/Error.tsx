import { ArrowExit, Icon } from 'src/shared/ui';

import s from './errorPage.module.scss';

const ErrorPage = () => {
  return (
    <div className={s.error}>
      <ArrowExit />

      <h1>Oops, something went wrong</h1>
      <Icon name="error" />
    </div>
  );
};

export default ErrorPage;

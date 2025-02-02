import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { router } from './routes/router';
import { store } from './store/store';

import './styles/global.scss';

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

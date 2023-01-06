// eslint-disable-next-line import/no-internal-modules
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';
import { I18nextProvider } from 'react-i18next';

import './App.css';
import { i18n } from './i18n';
import { ModalProvider } from './modal';
import RouteManager from './routeManager';

const App: React.FC = () => (
  <I18nextProvider i18n={i18n}>
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerStyle={{ marginTop: '7vh' }}
      toastOptions={{
        duration: 5000
      }}
    />
    <ModalProvider>
      <RouteManager />
    </ModalProvider>
  </I18nextProvider>
);

export default App;

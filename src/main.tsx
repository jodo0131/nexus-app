import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { LoadingProvider } from 'context/LoadingContext.tsx';
import { ModalProvider } from 'context/ModalContext.tsx';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'store/index.tsx';
import AppTheme from 'theme/AppTheme.tsx';

import App from './App.tsx';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppTheme>
          <LoadingProvider>
            <ModalProvider>
              <App />
            </ModalProvider>
          </LoadingProvider>
        </AppTheme>
      </PersistGate>
    </Provider>
  </StrictMode>,
);

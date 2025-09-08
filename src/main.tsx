import { createRoot } from 'react-dom/client';
import './styles/fonts.css';
import './styles/theme.css';
import './index.css';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
// import { persistor, store } from './redux/store';
import App from './App';

createRoot(document.getElementById('root')!).render(
  // <Provider store={store}>
  // <PersistGate loading={null} persistor={persistor}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </PersistGate>
  // </Provider>
);

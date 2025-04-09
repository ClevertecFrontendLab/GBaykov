import './index.css';
import './reset.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';

import { store } from '~/store/configure-store.ts';

import { AppRoutes } from './routes/routes';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppRoutes />
            </Provider>
        </BrowserRouter>
    </StrictMode>,
);

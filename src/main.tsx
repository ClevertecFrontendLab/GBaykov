import './reset.css';

import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';

import { store } from '~/store/configure-store.ts';

import { AppRoutes } from './routes/routes';
import { theme } from './theme';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <Provider store={store}>
                    <AppRoutes />
                </Provider>
            </BrowserRouter>
        </ChakraProvider>
    </StrictMode>,
);

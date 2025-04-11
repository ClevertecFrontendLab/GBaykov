import { Route, Routes } from 'react-router';

import App from '~/app/App';
import { FoodPage } from '~/components/pages/food_page/food_page';
import { MainPage } from '~/components/pages/main_page/main_page';

import { PATHS } from './paths';

export const AppRoutes = () => (
    <Routes>
        <Route path='/' element={<App />}>
            <Route path={`${PATHS.MAIN}`} element={<MainPage />} />
            {PATHS.FOOD_VARIANTS.map((variant) => (
                <Route key={variant} path={`${variant}`} element={<FoodPage />} />
            ))}
            {PATHS.FOOD_VARIANTS.map((variant, index) => (
                <Route
                    key={`${variant + index}/:tab`}
                    path={`${variant}/:tab`}
                    element={<FoodPage />}
                />
            ))}
        </Route>
    </Routes>
);

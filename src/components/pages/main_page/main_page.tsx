import PagesHeading from '~/components/pagesHeading/pagesHeading';

import NewRecipes from './newRecipes/NewRecipes';

export const MainPage = () => (
    <>
        <PagesHeading title='Приятного аппетита!' />
        <NewRecipes />
    </>
);

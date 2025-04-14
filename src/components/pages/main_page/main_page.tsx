import AdditionalRecipes from '~/components/additionalRecipes/AdditionalRecipes';
import PagesHeading from '~/components/pagesHeading/pagesHeading';
import RecipesCardField from '~/components/recipesCardField/recipesCardField';

import Blogs from './blogs/Blogs';
import NewRecipes from './newRecipes/NewRecipes';

export const MainPage = () => (
    <>
        <PagesHeading title='Приятного аппетита!' />
        <NewRecipes />
        <RecipesCardField isMainPage={true} />
        <Blogs />
        <AdditionalRecipes />
    </>
);
//title='' description=''

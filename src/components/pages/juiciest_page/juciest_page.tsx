import AdditionalRecipes from '~/components/additionalRecipes/AdditionalRecipes';
import PagesHeading from '~/components/pagesHeading/pagesHeading';
import RecipesCardField from '~/components/recipesCardField/recipesCardField';

export const JuciestPage = () => (
    <>
        <PagesHeading title='Самое сочное' />
        <RecipesCardField isMainPage={false} />
        <AdditionalRecipes />
    </>
);

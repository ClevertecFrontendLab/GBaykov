import AdditionalRecipes from '~/components/additionalRecipes/AdditionalRecipes';
import PagesHeading from '~/components/pagesHeading/pagesHeading';
import RecipesCardField from '~/components/recipesCardField/recipesCardField';
import CustomTabs from '~/components/tabs/Tabs';
const FodPageAdditionalRecipesData = {
    title: 'Десерты, выпечка',
    description:
        'Без них невозможно представить себе ни современную, ни традиционную  кулинарию. Пироги и печенья, блины, пончики, вареники и, конечно, хлеб - рецепты изделий из теста многообразны и невероятно популярны.',
};

export const FoodPage = () => (
    <>
        <PagesHeading
            title='Веганская кухня'
            description='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
        />
        <CustomTabs />
        <RecipesCardField isMainPage={false} />
        <AdditionalRecipes
            title={FodPageAdditionalRecipesData.title}
            description={FodPageAdditionalRecipesData.description}
        />
    </>
);

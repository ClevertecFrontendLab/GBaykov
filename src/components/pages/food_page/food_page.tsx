import PagesHeading from '~/components/pagesHeading/pagesHeading';
import CustomTabs from '~/components/tabs/Tabs';

export const FoodPage = () => (
    <>
        <PagesHeading
            title='Веганская кухня'
            description='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
        />
        <CustomTabs />
    </>
);

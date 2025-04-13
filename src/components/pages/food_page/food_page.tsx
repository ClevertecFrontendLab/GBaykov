import { Heading } from '@chakra-ui/react';
import { useParams } from 'react-router';

import PagesHeading from '~/components/pagesHeading/pagesHeading';

export const FoodPage = () => {
    const { tab } = useParams();
    return (
        <>
            <PagesHeading
                title='Веганская кухня'
                description='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
            />
            <Heading color={[null, 'red', 'orange', 'coral', 'darkred', 'honeydew']}>
                Веганская кухня
            </Heading>
            <Heading color={[null, 'red', 'orange', 'coral', 'darkred', 'honeydew']}>
                Веганская кухня
            </Heading>
            <Heading color={[null, 'red', 'orange', 'coral', 'darkred', 'honeydew']}>
                Веганская кухня
            </Heading>
            <Heading color={[null, 'red', 'orange', 'coral', 'darkred', 'honeydew']}>
                Веганская кухня
            </Heading>
            <Heading color={[null, 'red', 'orange', 'coral', 'darkred', 'honeydew']}>
                Веганская кухня
            </Heading>
            <Heading color={[null, 'red', 'orange', 'coral', 'darkred', 'honeydew']}>
                Веганская кухня
            </Heading>
            <Heading color={[null, 'red', 'orange', 'coral', 'darkred', 'honeydew']}>
                Веганская кухня
            </Heading>
            <Heading color={[null, 'red', 'orange', 'coral', 'darkred', 'honeydew']}>
                Веганская кухня
            </Heading>
            <Heading color={[null, 'red', 'orange', 'coral', 'darkred', 'honeydew']}>
                Веганская кухня
            </Heading>
            <Heading color={[null, 'red', 'orange', 'coral', 'darkred', 'honeydew']}>
                Веганская кухня
            </Heading>
            <Heading color={[null, 'red', 'orange', 'coral', 'darkred', 'honeydew']}>
                Веганская кухня
            </Heading>
            <Heading color={[null, 'red', 'orange', 'coral', 'darkred', 'honeydew']}>
                Веганская кухня
            </Heading>
            <Heading color={[null, 'red', 'orange', 'coral', 'darkred', 'honeydew']}>
                Веганская кухня
            </Heading>
            <Heading color={[null, 'red', 'orange', 'coral', 'darkred', 'honeydew']}>
                Веганская кухня
            </Heading>
            <Heading color={[null, 'red', 'orange', 'coral', 'darkred', 'honeydew']}>
                Веганская кухня
            </Heading>
            <Heading color={[null, 'red', 'orange', 'coral', 'darkred', 'honeydew']}>
                Веганская кухня
            </Heading>
            <Heading color={[null, 'red', 'orange', 'coral', 'darkred', 'honeydew']}>
                Веганская кухня
            </Heading>
            <Heading color={[null, 'red', 'orange', 'coral', 'darkred', 'honeydew']}>
                Веганская кухня
            </Heading>
            <Heading color={[null, 'red', 'orange', 'coral', 'darkred', 'honeydew']}>
                Веганская кухня
            </Heading>
            <Heading color={[null, 'red', 'orange', 'coral', 'darkred', 'honeydew']}>
                Веганская кухня
            </Heading>
            <Heading color={[null, 'red', 'orange', 'coral', 'darkred', 'honeydew']}>
                Веганская кухня
            </Heading>
            <Heading color={[null, 'red', 'orange', 'coral', 'darkred', 'honeydew']}>
                Веганская кухня
            </Heading>

            <div>{tab}</div>
        </>
    );
};

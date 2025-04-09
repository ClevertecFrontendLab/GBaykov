import { Flex, Heading } from '@chakra-ui/react';
import { useParams } from 'react-router';

export const FoodPage = () => {
    const { tab } = useParams();

    return (
        <Flex>
            <div>
                <Heading>Веганская кухня</Heading>
            </div>

            <div>{tab}</div>
        </Flex>
    );
};

import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Heading, HStack, Stack, useMediaQuery } from '@chakra-ui/react';
import { FC } from 'react';
import { NavLink } from 'react-router';

import { PATHS } from '~/routes/paths';

import { recipesCardsData } from '../database/recipeCardData';
import RecipeCard from './recipesCard';

interface MostDeliciousProps {
    isMainPage: boolean;
}

const RecipesCardField: FC<MostDeliciousProps> = ({ isMainPage }) => {
    const [isLargerThan768] = useMediaQuery('(min-width: 769px)');
    const cardsData = isMainPage ? recipesCardsData.slice(0, 4) : recipesCardsData;

    return (
        <Box
            as='section'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            gap={{ base: 3, xl: 4, '2xl': 5 }}
            mt={8}
        >
            {isMainPage && (
                <HStack justifyContent='space-between'>
                    <Heading
                        as='h3'
                        fontSize={{ base: '2xl', lg: '4xl', xl: '5xl' }}
                        lineHeight={{ base: 1.33, lg: 1.11, xl: 1 }}
                        fontWeight={500}
                    >
                        Самое сочное
                    </Heading>
                    <Button
                        variant='lime'
                        w='max-content'
                        as={NavLink}
                        to={PATHS.JUCIEST}
                        display={isLargerThan768 ? 'inline-flex' : 'none'}
                        bg='lime.400'
                        rightIcon={<ArrowForwardIcon />}
                        data-test-id={isLargerThan768 ? 'juiciest-link' : null}
                    >
                        Вся подборка
                    </Button>
                </HStack>
            )}

            <Stack
                spacing={{ base: 3, xl: 6 }}
                direction={{ base: 'column', md: 'row', xl: 'column', '2xl': 'row' }}
                flexWrap={{ base: 'nowrap', md: 'wrap' }}
                align='center'
            >
                {cardsData.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </Stack>
            {isMainPage ? (
                <Button
                    variant='lime'
                    w='max-content'
                    as={NavLink}
                    to={PATHS.JUCIEST}
                    mx='auto'
                    rightIcon={<ArrowForwardIcon />}
                    data-test-id='juiciest-link-mobile'
                    visibility={isLargerThan768 ? 'hidden' : 'visible'}
                >
                    Вся подборка
                </Button>
            ) : (
                <Button variant='lime' w='max-content' mx='auto'>
                    Загрузить еще
                </Button>
            )}
        </Box>
    );
};
export default RecipesCardField;

import { Box, Heading, Hide, Stack, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';

import { additionalRecipes } from '../database/additionalRecipes';
import AdditionalRecipeCard from './AdditionalRecipeCard';
import ShortCard from './ShortCard';

type AdditionalRecipesProps = {
    title?: string;
    description?: string;
};

const AdditionalRecipes: FC<AdditionalRecipesProps> = ({ title, description }) => {
    const additionalRecipesData = additionalRecipes.slice(0, 2);
    const dataForShortCard = additionalRecipes.slice(2);

    return (
        <Box
            textAlign='start'
            as='section'
            mt={8}
            pt={{ base: 2, xl: 6 }}
            borderTop='1px solid rgba(0, 0, 0, 0.08)'
        >
            <Stack direction={{ base: 'column', xl: 'row' }} gap={{ base: 3, xl: 7, '2xl': 262 }}>
                <Heading
                    fontSize={{ base: '2xl', xl: '4xl', '2xl': '5xl' }}
                    lineHeight={{ base: 'short', xl: 1.11, '2xl': 1 }}
                    fontWeight='medium'
                    w={{ base: '100%', xl: 'calc(33% - 20px)' }}
                    flexShrink={0}
                >
                    {title || `Веганская кухня`}
                    {/* Веганская кухня */}
                </Heading>
                <Text
                    fontSize={{ base: '0.875rem', xl: '1rem' }}
                    fontWeight={500}
                    lineHeight={{ base: 'base', lg: 'sesquialteral' }}
                    color='blackAlpha.700'
                >
                    {description ||
                        `Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать
                    вегетарианскую диету и готовить вкусные вегетарианские блюда.`}
                </Text>
            </Stack>

            <Stack
                direction={['column', 'column', 'row']}
                spacing={{ base: 3, lg: 4, '2xl': 6 }}
                mt={{ base: 4, xl: 6 }}
            >
                {additionalRecipesData.map((recipe) => (
                    <AdditionalRecipeCard recipe={recipe} key={recipe.id} />
                ))}
                <VStack
                    maxW={{ base: '100%', md: '33%', '2xl': '100%' }}
                    gap={{ base: '12px', md: '6px', xl: '12px' }}
                >
                    {dataForShortCard.map((recipe) => (
                        <ShortCard recipe={recipe} key={recipe.id} />
                    ))}
                </VStack>
            </Stack>
            <Hide above='xl'>
                <Box h={{ base: '100px' }}></Box>
            </Hide>
        </Box>
    );
};

export default AdditionalRecipes;

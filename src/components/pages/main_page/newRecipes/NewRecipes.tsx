import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Heading, HStack, Show } from '@chakra-ui/react';

import { newRecipesData } from '~/components/database/newRecipesData';

import NewRecipeCard from './NewRecipeCard';

const NewRecipes = () => (
    <Box as='section' mt={8} position='relative'>
        <Heading
            fontWeight='medium'
            fontSize={{ base: '2xl', xl: '4xl', '2xl': '5xl' }}
            lineHeight={{ base: 'short', xl: 1.11, '2xl': 1 }}
            textAlign='start'
        >
            Новые рецепты
        </Heading>
        <HStack
            spacing={{ base: 3, xl: 6 }}
            position='relative'
            overflowX='auto'
            py={{ base: 3, xl: 4 }}
            alignItems='stretch'
            css={{
                '&::-webkit-scrollbar': {
                    display: 'none',
                },
            }}
        >
            {newRecipesData.map((recipe) => (
                <NewRecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </HStack>
        <Show above='lg'>
            <Button
                leftIcon={<ArrowBackIcon color='lime.50' boxSize={4} />}
                iconSpacing={0}
                boxSize={10}
                bg='black'
                position='absolute'
                bottom={216}
                left={-2}
                zIndex={9}
            />
            <Button
                leftIcon={<ArrowForwardIcon color='lime.50' boxSize={4} />}
                iconSpacing={0}
                boxSize={10}
                bg='black'
                position='absolute'
                bottom={216}
                right={-2}
                zIndex={9}
            />
        </Show>
    </Box>
);

export default NewRecipes;

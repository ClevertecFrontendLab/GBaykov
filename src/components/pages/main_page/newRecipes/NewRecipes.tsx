import { Box, Heading, HStack } from '@chakra-ui/react';

import Slider from '~/components/slider/Slider';

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
            marginRight={{ base: '-16px', md: 0 }}
            spacing={{ base: 3, xl: 6 }}
            position='relative'
            py={{ base: 3, xl: 4 }}
        >
            <Slider />
        </HStack>
    </Box>
);

export default NewRecipes;

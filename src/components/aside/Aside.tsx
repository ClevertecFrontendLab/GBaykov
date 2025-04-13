import { Center, Flex, Image, Text } from '@chakra-ui/react';

import saveRecie from '~/assets/save-recipe.svg';

import UserNotification from '../userNotifications/UserNotifications';

export const Aside = () => (
    <Flex
        display={{ base: 'none', lg: 'flex' }}
        as='aside'
        w='208px'
        h='calc(100vh - 80px)'
        pt={4}
        flexDirection='column'
        justifyContent='space-between'
        alignContent='flex-end'
    >
        <UserNotification direction='vertical' />

        <Center
            boxSize={52}
            position='relative'
            bgGradient='radial(30% 30% at 50% 50%, #C4FF61 0%, #FFFFFF 100%)'
            flexDirection='column'
            cursor='pointer'
        >
            <Image src={saveRecie} />
            <Text
                fontWeight='normal'
                fontSize='xs'
                lineHeight='short'
                color='blackAlpha.700'
                position='absolute'
                top='140px'
            >
                Записать рецепт
            </Text>
        </Center>
    </Flex>
);

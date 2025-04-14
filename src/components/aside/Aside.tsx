import { Center, Flex, Image, Text } from '@chakra-ui/react';

import saveRecie from '~/assets/icons/save-recipe.svg';

import UserNotification from '../userNotifications/UserNotifications';

export const Aside = () => (
    <Flex
        as='aside'
        flexDirection='column'
        justifyContent='space-between'
        alignContent='flex-end'
        display={{ base: 'none', lg: 'flex' }}
        w='250px'
        h='calc(100vh - 80px - 16px)'
        pt={4}
        position='fixed'
        right={0}
    >
        <UserNotification direction='vertical' />

        <Center
            boxSize={52}
            position='fixed'
            bottom={0}
            right='10px'
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

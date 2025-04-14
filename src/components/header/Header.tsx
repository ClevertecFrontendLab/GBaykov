import { Center, Flex, Hide, Image, Show, Text, useMediaQuery, VStack } from '@chakra-ui/react';

import user_photo from '~/assets/images/user_photo.png';
import { BurgerIcon } from '~/icons/burger';
import { Logo } from '~/icons/logo';
import { Pot } from '~/icons/pot';

import Breadcrumbs from '../breadcrumbs/Breadcrumb';
import UserNotification from '../userNotifications/UserNotifications';

const Header = () => {
    const [is768AndLarge] = useMediaQuery('(min-width: 768px)');
    return (
        <Flex
            as='header'
            backgroundColor='lime.50'
            justifyContent='space-between'
            p={{ base: '16px 32px 16px 16px', xl: '16px 80px 16px 16px' }}
            position='fixed'
            top='0'
            left='0'
            w='100%'
            zIndex='docked'
        >
            <Flex maxWidth='256px' w='100%' gap='7px'>
                <Pot /> {is768AndLarge && <Logo />}
            </Flex>

            <Hide above='lg'>
                <Flex alignContent='center' alignItems='center' gap={{ base: '32px', md: '40px' }}>
                    <UserNotification direction='horizontal' />
                    <Center w='16px' h='12px'>
                        <BurgerIcon aria-label='hamburger-menu' />
                    </Center>
                </Flex>
            </Hide>
            <Show above='lg'>
                {' '}
                <Flex w='100%' justifyContent='space-between'>
                    <Breadcrumbs />
                    <Flex gap={4}>
                        <Image
                            borderRadius='full'
                            boxSize='48px'
                            src={user_photo}
                            alt='User photo'
                        />
                        <VStack spacing={0} align='start'>
                            <Text fontSize='lg' fontWeight='medium' lineHeight='tall'>
                                Екатерина Константинопольская
                            </Text>
                            <Text fontSize='sm' fontWeight='normal' lineHeight='base'>
                                @bake_and_pie
                            </Text>
                        </VStack>
                    </Flex>
                    {/* {is992AndLarge && <Breadcrumbs />}
                    {is992AndLarge && (
                        <Flex gap={4}>
                            <Image
                                borderRadius='full'
                                boxSize='48px'
                                src={user_photo}
                                alt='User photo'
                            />
                            <VStack spacing={0} align='start'>
                                <Text fontSize='lg' fontWeight='medium' lineHeight='tall'>
                                    Екатерина Константинопольская
                                </Text>
                                <Text fontSize='sm' fontWeight='normal' lineHeight='base'>
                                    @bake_and_pie
                                </Text>
                            </VStack>
                        </Flex>
                    )} */}
                </Flex>
            </Show>
        </Flex>
    );
};

export default Header;

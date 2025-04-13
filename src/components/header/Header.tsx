import { Flex, Image, Text, useMediaQuery, VStack } from '@chakra-ui/react';

import user_photo from '~/assets/images/user_photo.png';
import { Logo } from '~/icons/logo';
import { Pot } from '~/icons/pot';

import Breadcrumbs from '../breadcrumbs/Breadcrumb';

const Header = () => {
    const [is992AndLarge] = useMediaQuery('(min-width: 992px)');
    const [is768AndLarge] = useMediaQuery('(min-width: 768px)');
    return (
        <Flex
            as='header'
            backgroundColor='lime.50'
            justifyContent='space-between'
            p='16px 56px 16px 16px'
            position='fixed'
            top='0'
            left='0'
            w='100%'
            zIndex='docked'
        >
            <Flex maxWidth='256px' w='100%' gap='7px'>
                <Pot /> {is768AndLarge && <Logo />}
            </Flex>
            <Flex w='100%' justifyContent='space-between'>
                {is992AndLarge && <Breadcrumbs />}
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
                )}
            </Flex>
        </Flex>
    );
};

export default Header;

import { Flex, Image, Text, VStack } from '@chakra-ui/react';

import user_photo from '~/assets/user_photo.png';
import { Logo } from '~/icons/logo';
import { Pot } from '~/icons/pot';

import Breadcrumbs from '../breadcrumbs/Breadcrumb';

const Header = () => (
    <Flex backgroundColor='lime.50' justifyContent='space-between' p='16px 56px 16px 16px'>
        <Flex maxWidth='256px' w='100%'>
            <Pot /> <Logo />
        </Flex>
        <Flex w='100%' justifyContent='space-between'>
            <Breadcrumbs />
            <Flex gap={4}>
                <Image borderRadius='full' boxSize='48px' src={user_photo} alt='User photo' />
                <VStack spacing={0} align='start'>
                    <Text fontSize='lg' fontWeight='medium' lineHeight='tall'>
                        Екатерина Константинопольская
                    </Text>
                    <Text fontSize='sm' fontWeight='normal' lineHeight='base'>
                        @bake_and_pie
                    </Text>
                </VStack>
            </Flex>
        </Flex>
    </Flex>
);

export default Header;

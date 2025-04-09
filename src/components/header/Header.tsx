import { ChevronRightIcon } from '@chakra-ui/icons';
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    Image,
    Text,
    VStack,
} from '@chakra-ui/react';

import user_photo from '~/assets/user_photo.png';
import { Logo } from '~/icons/logo';
import { Pot } from '~/icons/pot';

const Header = () => (
    <Flex>
        <Box>
            <Pot /> <Logo />
        </Box>
        <Box>
            <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>About</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Flex>
                <Image borderRadius='full' boxSize='48px' src={user_photo} alt='User photo' />
                <VStack spacing={4} align='stretch'>
                    <Text>Екатерина Константинопольская</Text>
                    <Text>@bake_and_pie</Text>
                </VStack>
            </Flex>
        </Box>
    </Flex>
);

export default Header;

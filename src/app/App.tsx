import './App.css';

import { Box, Container, Flex, HStack } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import { Aside } from '~/components/aside/Aside';
import Header from '~/components/header/Header';
import { Navbar } from '~/components/navbar/navbar';

function App() {
    return (
        <Flex flexDirection='column'>
            <Header />
            <Flex
                as='main'
                flex='1'
                mt={{ base: '64px', lg: '80px' }}
                // w='100%'
                // h='calc(100vh - 80px)'
                // position='relative'
            >
                <Container
                    maxW='1920px'
                    px={{ base: 4, md: 5, lg: 2.5 }}
                    pb={{ base: '110px', md: 25, lg: 0 }}
                >
                    <HStack gap={6} align='stretch'>
                        <Navbar />
                        <Box
                            maxW={{ base: '100%', lg: '880px', xl: '1360px' }}
                            h='calc(100vh - 80px)'
                            pt={{ base: 4, lg: 8 }}
                            ml={{ base: 0, lg: '280px' }}
                            css={{
                                '&::-webkit-scrollbar': {
                                    display: 'none',
                                },
                            }}
                        >
                            <Outlet />
                        </Box>
                        <Aside />
                    </HStack>
                </Container>
            </Flex>
        </Flex>
    );
}

export default App;

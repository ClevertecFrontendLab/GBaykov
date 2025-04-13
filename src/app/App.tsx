import './App.css';

import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import { Aside } from '~/components/aside/Aside';
import Header from '~/components/header/Header';
import { Navbar } from '~/components/navbar/navbar';

function App() {
    return (
        <Flex w='100%' flexDirection='column'>
            <Header />
            <Flex
                w='100%'
                h='calc(100vh - 80px)'
                position='relative'
                justifyContent='space-between'
            >
                <Navbar />
                <Outlet />
                <Aside />
            </Flex>
        </Flex>
    );
}

export default App;

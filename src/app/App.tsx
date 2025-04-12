import './App.css';

import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import Header from '~/components/header/Header';
import { Navbar } from '~/components/navbar/navbar';

function App() {
    return (
        <Flex w='100%' flexDirection='column'>
            <Header />
            <Flex w='100%' h='calc(100vh - 80px)'>
                <Navbar />
                <Outlet />
            </Flex>
        </Flex>
    );
}

export default App;

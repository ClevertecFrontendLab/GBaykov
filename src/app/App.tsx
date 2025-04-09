import './App.css';

import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import Header from '~/components/header/Header';
import { Navbar } from '~/components/navbar/navbar';

function App() {
    return (
        <>
            <Header />
            <Flex>
                <Navbar />
                <Outlet />
            </Flex>
        </>
    );
}

export default App;

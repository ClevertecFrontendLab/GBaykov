import { Box, ButtonGroup, Center, Container, Image } from '@chakra-ui/react';

import HomeIcon from '~/assets/icons/home.svg';
import avatar from '~/assets/images/vysotskaya.png';
import { RecordIcon } from '~/icons/record';
import { SearchIcon } from '~/icons/search';

import { ActionButton } from '../ActionButton/ActionButton';

const Footer = () => (
    <Box
        as='footer'
        bg='lime.50'
        position='fixed'
        bottom='0'
        left='0'
        w='100%'
        zIndex={10}
        data-test-id='footer'
    >
        <Container maxW='container.xl' px={0}>
            <ButtonGroup
                w='100%'
                orientation='horizontal'
                spacing={0}
                py='10px'
                justifyContent='space-around'
            >
                <ActionButton
                    actionIcon={<Image src={HomeIcon} boxSize={10} />}
                    text='Главная'
                    flexDirection='column'
                    width='90px'
                    color='blackAlpha.700'
                ></ActionButton>
                <ActionButton
                    actionIcon={
                        <Center boxSize={10}>
                            <SearchIcon />
                        </Center>
                    }
                    text='Поиск'
                    flexDirection='column'
                    width='90px'
                    color='blackAlpha.700'
                ></ActionButton>
                <ActionButton
                    actionIcon={
                        <Center boxSize={10}>
                            <RecordIcon />
                        </Center>
                    }
                    text='Записать'
                    flexDirection='column'
                    width='90px'
                    color='blackAlpha.700'
                ></ActionButton>
                <ActionButton
                    actionIcon={<Image src={avatar} boxSize={10} />}
                    text='Мой профиль'
                    flexDirection='column'
                    width='90px'
                    color='blackAlpha.700'
                ></ActionButton>
            </ButtonGroup>
        </Container>
    </Box>
);

export default Footer;

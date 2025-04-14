import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import accordion from './nav-items/icons/accordion.svg';
import exitIcon from './nav-items/icons/exit.svg';
import { NAVIGATION_ITEMS } from './nav-items/nav-items';

export const Navbar = () => {
    const navigate = useNavigate();
    const pathanames = useLocation().pathname.split('/');
    const [, , tabPatname]: string[] = pathanames;
    const [activeTab, setActivTab] = useState(pathanames[2] || '');
    const navBarShadow =
        '0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)';

    const scrollableBlockRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setActivTab(tabPatname);
    }, [pathanames]);

    function onNavBarItemClick(link: string, tab: string) {
        navigate(`${link}/${tab}`);
    }

    useEffect(() => {
        const checkScroll = () => {
            if (scrollableBlockRef.current) {
                if (
                    scrollableBlockRef.current.scrollHeight >
                    scrollableBlockRef.current.clientHeight
                ) {
                    scrollableBlockRef.current.classList.add('with-shadow');
                } else {
                    scrollableBlockRef.current.classList.remove('with-shadow');
                }
            }
        };
        checkScroll();
        window.addEventListener('resize', checkScroll);
        if (scrollableBlockRef.current) {
            scrollableBlockRef.current.addEventListener('scroll', checkScroll);
        }
        return () => {
            window.removeEventListener('resize', checkScroll);
            if (scrollableBlockRef.current) {
                scrollableBlockRef.current.removeEventListener('scroll', checkScroll);
            }
        };
    });
    return (
        <Flex
            as='nav'
            flexShrink={0}
            display={{ base: 'none', lg: 'flex' }}
            w='256px'
            direction='column'
            justifyContent='space-between'
            h='calc(100vh - 80px)'
            zIndex='sticky'
            position='fixed'
            left='0'
            margin='0px'
            padding='24px 0px 0px 0px'
            boxShadow={navBarShadow}
        >
            <Accordion
                className='scroll-container'
                ref={scrollableBlockRef}
                _expanded={{ bg: 'tomato', color: 'white' }}
                allowToggle
                maxHeight='872px'
                overflow='auto'
                p='10px 16px 10px 10px'
                _hover={{
                    boxShadow:
                        '0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    borderRadius: '12px',
                }}
                css={{
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        width: '8px',
                        background: 'rgba(0, 0, 0, 0.04)',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: 'rgba(0, 0, 0, 0.16)',
                        borderRadius: '8px',
                    },
                    scrollbarGutter: 'stable',
                }}
            >
                {NAVIGATION_ITEMS.map((item, index) => (
                    <AccordionItem key={item.link + index} border='none'>
                        {({ isExpanded }) => (
                            <>
                                {' '}
                                <AccordionButton
                                    onClick={() => onNavBarItemClick(item.link, item.tabs[0].link)}
                                    data-test-id={item.link === 'vegans' && 'vegan-cuisine'}
                                    p='12px 8px'
                                    justifyContent='space-between'
                                    _expanded={{ bg: 'lime.100' }}
                                >
                                    <Flex gap={3}>
                                        {' '}
                                        <Image
                                            margin='auto'
                                            objectFit='cover'
                                            src={item.icon}
                                            alt='menu icon'
                                        />
                                        <Text
                                            fontWeight='medium'
                                            fontSize='md'
                                            lineHeight='sesquialteral'
                                            color='black'
                                        >
                                            {item.text}
                                        </Text>
                                    </Flex>
                                    <Image
                                        transform={isExpanded ? 'rotate(180deg)' : ''}
                                        objectFit='cover'
                                        src={accordion}
                                        alt='accordion'
                                    />
                                </AccordionButton>
                                <AccordionPanel p='0'>
                                    {item.tabs.map((tab, index) => (
                                        <Flex
                                            key={tab.link + index}
                                            alignContent='center'
                                            onClick={() => onNavBarItemClick(item.link, tab.link)}
                                            gap='11px'
                                            p={
                                                activeTab === tab.link
                                                    ? '4px 8px 4px 33px'
                                                    : '6px 8px 4px 40px'
                                            }
                                        >
                                            <Box
                                                backgroundColor='lime.300'
                                                width={activeTab === tab.link ? '8px' : '1px'}
                                                height={activeTab === tab.link ? '28px' : '24px'}
                                            />
                                            <Text
                                                key={tab.link}
                                                fontWeight={
                                                    activeTab === tab.link ? 'bold' : 'medium'
                                                }
                                                fontSize='md'
                                                lineHeight='sesquialteral'
                                                color='black'
                                            >
                                                {tab.text}
                                            </Text>
                                        </Flex>
                                    ))}
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                ))}
            </Accordion>
            <Stack gap={4} p='0px 24px 32px' alignItems='flex-start'>
                <Text fontWeight='medium' fontSize='xs' lineHeight='short' color='blackAlpha.400'>
                    Версия программы 03.25
                </Text>
                <Text
                    textAlign='start'
                    fontWeight='normal'
                    fontSize='xs'
                    lineHeight='short'
                    color='blackAlpha.400'
                >
                    Все права защищены,
                    <br /> ученический файл,
                    <br /> ©Клевер Технолоджи, 2025
                </Text>
                <Flex gap={1.5}>
                    <Image margin='auto' objectFit='cover' src={exitIcon} alt='exit' />{' '}
                    <Text fontWeight='semibold' fontSize='xs' lineHeight='short' color='black'>
                        Выйти
                    </Text>
                </Flex>
            </Stack>
        </Flex>
    );
};

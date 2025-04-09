import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Flex,
    Image,
    List,
    ListItem,
    Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { NAVIGATION_ITEMS } from './nav-items/nav-items';

export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <List w='256px' spacing={3}>
            {NAVIGATION_ITEMS.map((item) => (
                <ListItem>
                    <Accordion allowToggle>
                        <AccordionItem>
                            <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                                <Flex boxSize={24}>
                                    {' '}
                                    <Image
                                        margin='auto'
                                        objectFit='cover'
                                        src={item.icon}
                                        alt='menu icon'
                                    />
                                </Flex>
                                {item.text}

                                <AccordionIcon />
                            </AccordionButton>

                            <AccordionPanel>
                                {item.tabs.map((tab) => (
                                    <Text
                                        onClick={() => {
                                            console.log(item.link);
                                            navigate(`${item.link}/${tab.link}`);
                                        }}
                                    >
                                        {tab.text}
                                    </Text>
                                ))}
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </ListItem>
            ))}
        </List>
    );
};

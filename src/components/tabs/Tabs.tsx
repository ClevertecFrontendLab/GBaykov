import { TabList, Tabs } from '@chakra-ui/icons';
import { Tab } from '@chakra-ui/react';

import { NAVIGATION_ITEMS } from '../navbar/nav-items/nav-items';

const CustomTabs = () => {
    const tabCategory = NAVIGATION_ITEMS.find((category) => category.link === 'vegans');

    return (
        <Tabs
            as='section'
            pb={3}
            mt={8}
            overflowX='auto'
            css={{
                '&::-webkit-scrollbar': {
                    display: 'none',
                },
            }}
        >
            <TabList display='flex' justifyContent='center'>
                {tabCategory?.tabs.map((subCategory, index) => (
                    <Tab
                        key={subCategory.link + index}
                        flexShrink={0}
                        fontSize={{ base: 'sm', xl: 'md' }}
                        lineHeight={{ base: 'base', xl: 'sesquialteral' }}
                        fontWeight={500}
                        color='lime.800'
                        _selected={{
                            borderColor: 'lime.600',
                            color: 'lime.600',
                        }}
                    >
                        {subCategory.text}
                    </Tab>
                ))}
            </TabList>
        </Tabs>
    );
};

export default CustomTabs;

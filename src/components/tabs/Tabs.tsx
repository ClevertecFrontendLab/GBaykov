import { Tabs } from '@chakra-ui/icons';
import { Tab } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { NAVIGATION_ITEMS } from '../navbar/nav-items/nav-items';
import { NavItemTab } from '../navbar/nav-items/types';

const CustomTabs = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const pathanames = useLocation().pathname.split('/');
    const [, fitrstLvlathname, tabPatname]: string[] = pathanames;
    const navigate = useNavigate();
    const tabsCategory = NAVIGATION_ITEMS.find((category) => category.link === fitrstLvlathname);

    const handleTabsChange = (index: number) => {
        setTabIndex(index);
        if (tabsCategory) {
            const tab: NavItemTab = tabsCategory?.tabs[index];
            navigate(`/${tabsCategory.link}/${tab.link}`);
        }
    };
    useEffect(() => {
        if (tabsCategory) {
            const tab: number = tabsCategory?.tabs.findIndex((item) => item.link === tabPatname);
            setTabIndex(tab);
        }
    }, [pathanames]);

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
            <Tabs
                display='flex'
                justifyContent='center'
                index={tabIndex}
                onChange={handleTabsChange}
            >
                {tabsCategory?.tabs.map((subCategory, index) => (
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
            </Tabs>
        </Tabs>
    );
};

export default CustomTabs;

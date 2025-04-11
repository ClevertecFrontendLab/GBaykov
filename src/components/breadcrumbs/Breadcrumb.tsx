import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { NAVIGATION_ITEMS } from '../navbar/nav-items/nav-items';

type Breadcrumb = { link: string; text: string };

const Breadcrumbs = () => {
    const pathanames = useLocation().pathname.split('/');
    const [mainpage, fitrstLvlathname, secondLvlPatname]: string[] = pathanames;
    const [breadcrumbsData, setBreadcrumbsData] = useState([{ link: '/', text: 'Главная' }]);

    const navigate = useNavigate();

    function getBradcrumbsData() {
        const breads = [{ link: '/', text: 'Главная' }];
        const navItem = NAVIGATION_ITEMS.find((item) => item.link === fitrstLvlathname);
        if (navItem) breads.push({ link: navItem?.link, text: navItem?.text });
        const navItemTab = navItem?.tabs.find((item) => item.link === secondLvlPatname);
        if (navItemTab) breads.push({ link: navItemTab?.link, text: navItemTab?.text });
        return breads;
    }

    useEffect(() => {
        const breads = getBradcrumbsData();
        setBreadcrumbsData(breads);
    }, [mainpage, fitrstLvlathname, secondLvlPatname]);

    return (
        <Breadcrumb
            margin='auto'
            ml='0'
            spacing='2'
            separator={<ChevronRightIcon color='gray.800' />}
        >
            {breadcrumbsData.map(({ link, text }, index) => (
                <BreadcrumbItem
                    key={link + index}
                    fontWeight='normal'
                    fontSize='md'
                    lineHeight='sesquialteral'
                >
                    <BreadcrumbLink
                        onClick={() => {
                            if (index !== breadcrumbsData.length - 1) navigate(link || '');
                        }}
                        color={index === breadcrumbsData.length - 1 ? 'black' : 'blackAlpha.700'}
                        isCurrentPage={index === breadcrumbsData.length - 1 ? true : false}
                        _hover={{
                            color: index === breadcrumbsData.length - 1 ? '' : 'lime.600',
                        }}
                    >
                        {text}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            ))}
        </Breadcrumb>
    );
};

export default Breadcrumbs;

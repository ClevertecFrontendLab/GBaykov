import appetizers from './icons/appetizers.png';
import children from './icons/children.png';
import desserts from './icons/desserts.png';
import drinks from './icons/drinks.png';
import first from './icons/first.png';
import grilled from './icons/grilled.png';
import national from './icons/national.png';
import salads from './icons/salads.png';
import sauces from './icons/sauces.png';
import second from './icons/second.png';
import therapeutic from './icons/therapeutic.png';
import vegans_icon from './icons/vegans.png';
import workpieces from './icons/workpieces.png';

type NavItemTab = {
    link: string;
    text: string;
};
type NavItem = {
    icon: string;
    text: string;
    link: string;
    tabs: NavItemTab[];
};

export const NAVIGATION_ITEMS: NavItem[] = [
    {
        icon: salads,
        text: 'Салаты',
        link: 'salads',
        tabs: [],
    },
    {
        icon: appetizers,
        text: 'Закуски',
        link: 'appetizers',
        tabs: [],
    },
    {
        icon: first,
        text: 'Первые блюда',
        link: 'first',
        tabs: [],
    },
    {
        icon: second,
        text: 'Вторые блюда',
        link: 'second',
        tabs: [],
    },
    {
        icon: desserts,
        text: 'Десерты, выпечка',
        link: 'desserts',
        tabs: [],
    },
    {
        icon: grilled,
        text: 'Блюда на гриле',
        link: 'grilled',
        tabs: [],
    },
    {
        icon: vegans_icon,
        text: 'Веганская кухня',
        link: 'vegans',
        tabs: [
            {
                link: 'appetizers',
                text: 'Закуски',
            },
            {
                link: 'first',
                text: 'Первые блюда',
            },
            {
                link: 'second',
                text: 'Вторые блюда',
            },
            {
                link: 'side_dishes',
                text: 'Гарниры',
            },
            {
                link: 'desserts',
                text: 'Десерты',
            },
            {
                link: 'pastries',
                text: 'Выпечка',
            },
            {
                link: 'raw_food',
                text: 'Сыроедческие блюда',
            },
            {
                link: 'drinks',
                text: 'Напитки',
            },
        ],
    },
    {
        icon: children,
        text: 'Детские блюда',
        link: 'children',
        tabs: [],
    },
    {
        icon: therapeutic,
        text: 'Лечебное питание',
        link: 'therapeutic',
        tabs: [],
    },
    {
        icon: national,
        text: 'Национальные',
        link: 'national',
        tabs: [],
    },
    {
        icon: sauces,
        text: 'Соусы',
        link: 'sauces',
        tabs: [],
    },
    {
        icon: drinks,
        text: 'Напитки',
        link: 'drinks',
        tabs: [],
    },
    {
        icon: workpieces,
        text: 'Заготовки',
        link: 'workpieces',
        tabs: [],
    },
];
export const NAVIGATION_ITEMS_LINKS = NAVIGATION_ITEMS.map((item) => item.link);

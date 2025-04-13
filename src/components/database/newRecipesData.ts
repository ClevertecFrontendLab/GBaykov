import desserts from '../navbar/nav-items/icons/desserts.png';
import first from '../navbar/nav-items/icons/first.png';
import salads from '../navbar/nav-items/icons/salads.png';
import vegans_icon from '../navbar/nav-items/icons/vegans.png';

export type NewRecipeType = {
    id: string;
    category: {
        icon: string;
        value: string;
    };
    image: string;
    title: string;
    description: string;
    icons: { actionIcon: 'saved' | 'like'; value: string }[];
};

export const newRecipesData: NewRecipeType[] = [
    {
        id: '1',
        category: {
            icon: first,
            value: 'Первые блюда',
        },
        image: '/src/assets/images/solyanka.jpg',
        title: 'Солянка с грибами',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        icons: [{ actionIcon: 'saved', value: '1' }],
    },
    {
        id: '2',
        category: {
            icon: vegans_icon,
            value: 'Веганская кухня',
        },
        image: '/src/assets/images/solyanka.jpg',
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        icons: [
            { actionIcon: 'saved', value: '2' },
            { actionIcon: 'like', value: '1' },
        ],
    },
    {
        id: '3',
        category: {
            icon: desserts,
            value: 'Десерты, выпечка',
        },
        image: '/src/assets/images/solyanka.jpg',
        title: 'Оладьи на кефире "Пышные"',
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        icons: [
            { actionIcon: 'saved', value: '1' },
            { actionIcon: 'like', value: '1' },
        ],
    },
    {
        id: '4',
        category: {
            icon: '',
            value: '',
        },
        image: '/src/assets/images/solyanka.jpg',
        title: 'Оладьи на кефире "Пышные"',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        icons: [
            { actionIcon: 'saved', value: '1' },
            { actionIcon: 'like', value: '1' },
        ],
    },
    {
        id: '5',
        category: {
            icon: first,
            value: 'Первые блюда',
        },
        image: '/src/assets/images/solyanka.jpg',
        title: 'Солянка с грибами',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        icons: [{ actionIcon: 'saved', value: '1' }],
    },
    {
        id: '6',
        category: {
            icon: vegans_icon,
            value: 'Веганская кухня',
        },
        image: '/src/assets/images/solyanka.jpg',
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        icons: [
            { actionIcon: 'saved', value: '2' },
            { actionIcon: 'like', value: '1' },
        ],
    },
    {
        id: '7',
        category: {
            icon: desserts,
            value: 'Десерты, выпечка',
        },
        image: '/src/assets/images/solyanka.jpg',
        title: 'Оладьи на кефире "Пышные"',
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        icons: [
            { actionIcon: 'saved', value: '1' },
            { actionIcon: 'like', value: '1' },
        ],
    },
    {
        id: '8',
        category: {
            icon: salads,
            value: 'Салаты',
        },
        image: '/src/assets/images/solyanka.jpg',
        title: 'Оладьи на кефире "Пышные"',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        icons: [
            { actionIcon: 'saved', value: '1' },
            { actionIcon: 'like', value: '1' },
        ],
    },
];

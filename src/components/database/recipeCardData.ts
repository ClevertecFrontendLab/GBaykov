import { RecipeCardType } from '~/types';

import national from '../navbar/nav-items/icons/national.png';
import second from '../navbar/nav-items/icons/second.png';

export const recipesCardsData: RecipeCardType[] = [
    {
        id: '1',
        image: '/src/assets/images/solyanka.jpg',
        category: {
            icon: second,
            value: 'Вторые блюда',
        },
        title: 'Кнели со спагетти',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        icons: [
            { actionIcon: 'saved', value: '85' },
            { actionIcon: 'like', value: '152' },
        ],
    },
    {
        id: '2',
        image: '/src/assets/images/potato.png',
        category: {
            icon: second,
            value: 'Вторые блюда',
        },
        title: 'Пряная ветчина по итальянски',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        icons: [
            { actionIcon: 'saved', value: '159' },
            { actionIcon: 'like', value: '257' },
        ],
        recommendation: {
            avatar: '/src/assets/images/vysotskaya.png',
            userName: 'Елена Высоцкая',
        },
    },
    {
        id: '3',
        image: '/src/assets/images/solyanka.jpg',
        category: {
            icon: second,
            value: 'Вторые блюда',
        },
        title: 'Лапша с курицей и шафраном',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        icons: [
            { actionIcon: 'saved', value: '258' },
            { actionIcon: 'like', value: '342' },
        ],
        recommendation: {
            avatar: '/src/assets/images/alex.png',
            userName: 'Alex Cook',
        },
    },
    {
        id: '4',
        image: '/src/assets/images/solyanka.jpg',
        category: {
            icon: national,
            value: 'Национальные',
        },
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        icons: [
            { actionIcon: 'saved', value: '124' },
            { actionIcon: 'like', value: '324' },
        ],
    },
    {
        id: '5',
        image: '/src/assets/images/potato.png',
        category: {
            icon: second,
            value: 'Вторые блюда',
        },
        title: 'Кнели со спагетти',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        icons: [
            { actionIcon: 'saved', value: '85' },
            { actionIcon: 'like', value: '152' },
        ],
    },
    {
        id: '6',
        image: '/src/assets/images/solyanka.jpg',
        category: {
            icon: second,
            value: 'Вторые блюда',
        },
        title: 'Пряная ветчина по итальянски',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        icons: [
            { actionIcon: 'saved', value: '159' },
            { actionIcon: 'like', value: '257' },
        ],
        recommendation: {
            avatar: '/src/assets/images/vysotskaya.png',
            userName: 'Елена Высоцкая',
        },
    },
    {
        id: '7',
        image: '/src/assets/images/solyanka.jpg',
        category: {
            icon: second,
            value: 'Вторые блюда',
        },
        title: 'Лапша с курицей и шафраном',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        icons: [
            { actionIcon: 'saved', value: '258' },
            { actionIcon: 'like', value: '342' },
        ],
        recommendation: {
            avatar: '/src/assets/images/alex.png',
            userName: 'Alex Cook',
        },
    },
    {
        id: '8',
        image: '/src/assets/images/potato.png',
        category: {
            icon: national,
            value: 'Национальные',
        },
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        icons: [
            { actionIcon: 'saved', value: '124' },
            { actionIcon: 'like', value: '324' },
        ],
    },
];

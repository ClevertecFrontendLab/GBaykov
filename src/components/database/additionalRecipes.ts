import { AdditionalRecipe } from '~/types';

import second from '../navbar/nav-items/icons/second.png';

export const additionalRecipes: AdditionalRecipe[] = [
    {
        id: '1',
        category: {
            icon: second,
            value: 'Вторые блюда',
        },
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        icons: [
            { actionIcon: 'saved', value: '1' },
            { actionIcon: 'like', value: '1' },
        ],
    },
    {
        id: '2',
        category: {
            icon: second,
            value: 'Вторые блюда',
        },
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
            icon: second,
            value: 'Вторые блюда',
        },
        title: 'Стейк для вегетарианцев',
        description: '',
        icons: [
            { actionIcon: 'saved', value: '1' },
            { actionIcon: 'like', value: '1' },
        ],
    },
    {
        id: '4',
        category: {
            icon: second,
            value: 'Вторые блюда',
        },
        title: 'Котлеты из гречки и фасоли',
        description: '',
        icons: [
            { actionIcon: 'saved', value: '1' },
            { actionIcon: 'like', value: '1' },
        ],
    },
    {
        id: '5',
        category: {
            icon: second,
            value: 'Вторые блюда',
        },
        title: 'Сырный суп с лапшой и брокколи',
        description: '',
        icons: [
            { actionIcon: 'saved', value: '1' },
            { actionIcon: 'like', value: '1' },
        ],
    },
];

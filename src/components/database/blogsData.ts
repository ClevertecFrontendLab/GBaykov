export type BlogData = {
    id: string;
    avatar: string;
    userName: string;
    login: string;
    description: string;
};

const blogsData: BlogData[] = [
    {
        id: '1',
        avatar: '/src/assets/images/vysotskaya.png',
        userName: 'Елена Высоцкая',
        login: '@elenapovar',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        id: '2',
        avatar: '/src/assets/images/alex.png',
        userName: 'Alex Cook',
        login: '@funtasticooking',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        id: '3',
        avatar: '/src/assets/images/ekaterina.png',
        userName: 'Екатерина Константинопольская',
        login: '@bake_and_pie',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
];

export default blogsData;

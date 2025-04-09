// export const PATHS = {
//     INITIAL: '/',
//     MAIN: '/main',
//     FOOD_VARIANTS: [
//         '/salads',
//         '/appetizers',
//         '/first',
//         '/second',
//         '/desserts',
//         '/grilled',
//         '/vegans',
//         '/children',
//         '/therapeutic',
//         '/national',
//         '/sauces',
//         '/drinks',
//         '/workpieces',
//     ],

import { NAVIGATION_ITEMS_LINKS } from '~/components/navbar/nav-items/nav-items';

// };
export const PATHS = {
    INITIAL: '/',
    MAIN: '/main',
    FOOD_VARIANTS: [...NAVIGATION_ITEMS_LINKS],
};

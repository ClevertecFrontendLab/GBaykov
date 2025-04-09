import { extendTheme } from '@chakra-ui/react';

import { Button } from './comonents/button';

export const theme = extendTheme({
    colors: {
        transparent: 'transparent',
        black: '#000',

        whiteAlpha: {
            100: 'rgba(255, 255, 255, 0.06)',
        },
        blackAlpha: {
            200: 'rgba(0, 0, 0, 0.08)',
            300: 'rgba(0, 0, 0, 0.16)',
            600: 'rgba(0, 0, 0, 0.48)',
            700: 'rgba(0, 0, 0, 0.64)',
            900: 'rgba(0, 0, 0, 0.92)',
        },
        white: '#fff',
        gray: {
            50: '#f7fafc',
            // ...
            900: '#171923',
        },
        lime: {
            50: '#ffffd3',
            150: '#d7ff94',
            300: '#c4ff61',
            400: '#b1ff2e',
            600: '#2db100',
            800: '#134b00',
        },
    },
    breakpoints: {
        base: '0em',
        sm: '22em', //360
        md: '48em', //768
        lg: '62em',
        xl: '90em', //1440
        '2xl': '120em', //1920
    },
    fonts: {
        main: 'Inter, sans-serif',
        secondFamily: 'Roboto, sans-serif',
    },
    fontSizes: {
        xs: '0.75rem', //12
        sm: '0.875rem', //14
        md: '1rem', //16
        lg: '1.125rem', //18
        xl: '1.25rem', //20
        '2xl': '1.5rem', //22
        '3xl': '1.875rem', //24
        '4xl': '2.25rem', //36
        '5xl': '3rem', //48
    },
    fontWeights: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
    },
    lineHeights: {
        normal: 'normal',
        none: 1,
        shorter: 1.25,
        short: 1.333,
        base: 1.43,
        sesquialteral: 1.5,
        tall: 1.56,
        taller: 2,
    },
    radii: {
        none: '0',
        sm: '0.125rem',
        base: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
    },
    components: {
        Button,
    },
});

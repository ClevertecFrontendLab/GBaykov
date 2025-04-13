import { StyleFunctionProps } from '@chakra-ui/react';

export const ButtonTheme = {
    baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'md',
    },
    sizes: {
        base: {
            height: '24px',
            fontSize: 'xs',
            lineHeight: 'short',
            p: '4px 8px',
        },
        lg: {
            height: '32px',
            fontSize: 'sm',
            lineHeight: 'base',
            p: '6px 12px',
        },
        xl: {
            height: '40px',
            fontSize: 'md',
            lineHeight: 'sesquialteral',
            p: '8px 16px',
        },
        xxl: {
            height: '48px',
            fontSize: 'lg',
            lineHeight: 'tall',
            p: '10px 24px',
        },
    },

    variants: {
        transparent: {
            border: '1px solid',
            borderColor: 'blackAlpha.600',
            borderRadius: 'md',
            backgroundColor: 'whiteAlpha.100',
        },
        transparentLime: {
            border: '1px solid',
            borderColor: 'blackAlpha.600',
            borderRadius: 'md',
            backgroundColor: 'whiteAlpha.100',
        },
        transparentLink: {
            borderRadius: 'md',
            backgroundColor: 'transparent',
        },
        black: {
            color: 'white',
            border: '1px solid',
            borderColor: 'blackAlpha.200',
            backgroundColor: 'blackAlpha.900',
        },
        lime: {
            color: 'black',
            border: 'none',
            backgroundColor: 'lime.400',
        },

        'with-shadow': {
            bg: 'red.400',
            boxShadow: '0 0 2px 2px #efdfde',
            sizes: {},
        },

        solid: (props: StyleFunctionProps) => ({
            bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
        }),
    },
};

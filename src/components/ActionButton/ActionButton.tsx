import { Center, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';

interface CustomButtonProps {
    actionIcon: ReactElement;
    text: string;
    flexDirection?: 'row' | 'column';
    height?: string;
    width?: string;
    px?: string | number;
    py?: string | number;
    color?: string;
    fontSize?: string | { base: string; lg: string };
    lineHeight?: string;
}

export const ActionButton = ({
    actionIcon,
    text,
    flexDirection,
    height,
    width,
    px,
    py,
    color = 'lime.600',
    fontSize = { base: 'xs', lg: 'md' },
    lineHeight = 'short',
}: CustomButtonProps) => (
    <Center
        flexDirection={flexDirection}
        bg='transparent'
        px={px}
        py={py}
        gap={{ base: 1.5, lg: 2 }}
        height={height}
        width={width}
    >
        {actionIcon}
        <Text fontWeight='semibold' fontSize={fontSize} color={color} lineHeight={lineHeight}>
            {text}
        </Text>
    </Center>
);

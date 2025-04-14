import { Box, Button, Card, Image, Text } from '@chakra-ui/react';

import { AdditionalRecipe } from '~/types';

const ShortCard = ({
    recipe: {
        title,
        category: { icon },
    },
}: {
    recipe: AdditionalRecipe;
}) => (
    <Card
        border='1px solid'
        borderColor='blackAlpha.200'
        borderRadius={8}
        p={3}
        w={{ base: '100%', '2xl': '668px' }}
        _hover={{
            boxShadow:
                '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
        }}
    >
        <Box display='flex' alignItems='center' gap={2}>
            <Image src={icon} boxSize={6} />
            <Text isTruncated fontSize={{ base: 'md', xl: 'lg', '2xl': 'xl' }}>
                {title}
            </Text>
            <Button
                variant='outline'
                flexShrink={0}
                border='1px solid #2db100'
                borderColor='lime.600'
                borderRadius={6}
                px={2}
                fontSize='xs'
                color='lime.600'
                h={8}
                ml='auto'
            >
                Готовить
            </Button>
        </Box>
    </Card>
);

export default ShortCard;

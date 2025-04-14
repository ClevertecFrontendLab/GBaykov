import { Box, Card, Image, Text } from '@chakra-ui/react';

import { BlogData } from '~/components/database/blogsData';

const BlogCard = ({
    blogData: { userName, avatar, description, login },
}: {
    blogData: BlogData;
}) => (
    <Card
        textAlign='start'
        border='1px solid'
        borderColor='blackAlpha.200'
        borderRadius={8}
        p={{ base: 4 }}
        _hover={{
            boxShadow:
                '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
        }}
    >
        <Box display='flex' alignItems='center' gap={{ base: 2, xl: 3 }}>
            <Image src={avatar} boxSize={{ base: 8, xl: 12 }} />
            <Box>
                <Text
                    fontWeight='medium'
                    isTruncated
                    maxWidth={{ base: '235px', md: '160px', xl: '175px' }}
                    lineHeight={{ base: 'sesquialteral', xl: 'tall' }}
                    fontSize={{ base: 'md', xl: 'lg' }}
                >
                    {userName}
                </Text>
                <Box
                    fontWeight='normal'
                    fontSize={{ base: 'xs', xl: 'sm' }}
                    lineHeight={{ base: 'short', xl: 'base' }}
                    color='blackAlha.700'
                >
                    {login}
                </Box>
            </Box>
        </Box>
        <Text noOfLines={3} fontSize='sm' lineHeight='base' mt={4}>
            {description}
        </Text>
    </Card>
);

export default BlogCard;

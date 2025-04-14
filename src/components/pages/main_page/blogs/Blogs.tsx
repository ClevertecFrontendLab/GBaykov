import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading, HStack, Stack } from '@chakra-ui/react';

import blogsData from '~/components/database/blogsData';

import BlogCard from './BlogsCard';

const Blogs = () => (
    <Flex
        as='section'
        flexDirection='column'
        mt={8}
        p={{ base: 3, lg: 6 }}
        bg='lime.300'
        borderRadius={16}
    >
        <HStack justify='space-between'>
            <Heading
                fontSize={{ base: '2xl', xl: '3xl', '2xl': '4xl' }}
                lineHeight={{ base: 'short', xl: 'shorter', '2xl': 1.11 }}
                fontWeight={{ base: 'medium', '2xl': 'normal' }}
            >
                Кулинарные блоги
            </Heading>
            <Button
                variant='ghost'
                rightIcon={<ArrowForwardIcon />}
                display={{ base: 'none', xl: 'inline-flex' }}
                fontWeight='semibold'
            >
                Все авторы
            </Button>
        </HStack>

        <Stack
            direction={['column', 'column', 'row']}
            mt={{ base: 3, xl: 4, '2xl': 6 }}
            gap={{ base: 3, xl: 4 }}
        >
            {blogsData.map((data) => (
                <BlogCard blogData={data} key={data.id} />
            ))}
        </Stack>
        <Button
            variant='ghost'
            mt={3}
            mx='auto'
            rightIcon={<ArrowForwardIcon />}
            display={{ base: 'block', xl: 'none' }}
        >
            Все авторы
        </Button>
    </Flex>
);

export default Blogs;

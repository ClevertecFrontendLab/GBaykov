import { Box, Center, Heading } from '@chakra-ui/react';

import Searchbar from '../searchbar/Searchbar';

type SearchbarProps = {
    title: string;
    description?: string;
};

const PagesHeading = ({ title, description }: SearchbarProps) => (
    <Center as='section' flexDirection='column' gap={{ base: 4, lg: 3 }}>
        <Heading
            as='h3'
            fontSize={{ base: '1.5rem', lg: '3rem' }}
            fontWeight={700}
            textAlign='center'
            lineHeight={{ base: 1.33, lg: 1 }}
        >
            {title}
        </Heading>
        <Box
            as='p'
            textAlign='center'
            fontSize={{ base: '0.875rem', lg: '1rem' }}
            fontWeight={500}
            lineHeight={{ base: 1.43, lg: 1.5 }}
            color='rgba(0, 0, 0, 0.48)'
            w={{ base: '100%', lg: '696px' }}
        >
            {description}
        </Box>
        <Searchbar />
    </Center>
);

export default PagesHeading;

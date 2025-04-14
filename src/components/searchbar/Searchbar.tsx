import { SearchIcon } from '@chakra-ui/icons';
import {
    Box,
    Center,
    Container,
    Flex,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    Switch,
} from '@chakra-ui/react';

import { FilterIcon } from '~/icons/filter';

const Searchbar = () => (
    <>
        <Flex justifyContent='center' width='100%' gap={3} mt={{ lg: 6 }}>
            <Center border='1px solid' borderColor='blackAlpha.600' borderRadius={6} flexShrink={0}>
                <Container display={{ base: 'block', lg: 'none' }}>
                    <FilterIcon width='12px' height='8px' />
                </Container>
                <Container display={{ base: 'none', lg: 'block' }}>
                    <FilterIcon width='18px' height='11px' />
                </Container>
            </Center>
            <InputGroup borderColor='blackAlpha.600' borderRadius={4} maxW={{ base: 404, lg: 458 }}>
                <Input
                    placeholder='Название или ингредиент...'
                    fontWeight='normal'
                    fontSize={{ base: 'sm', lg: 'lg' }}
                    h={{ base: 8, lg: 12 }}
                    color='lime.800'
                    pl={3}
                    sx={{
                        '::placeholder': {
                            color: 'lime.800',
                        },
                    }}
                />
                <InputRightElement h={{ base: 8, lg: 12 }}>
                    <SearchIcon boxSize={{ base: 4, lg: '18px' }} />
                </InputRightElement>
            </InputGroup>
        </Flex>

        <Box display={{ base: 'none', lg: 'flex' }} gap={4}>
            <FormControl display='flex' alignItems='center'>
                <FormLabel
                    fontSize='medium'
                    lineHeight='sesquialteral'
                    htmlFor='allergens'
                    mb='0'
                    fontWeight='medium'
                    w={214}
                >
                    Исключить мои аллергены
                </FormLabel>
                <Switch id='allergens' />
            </FormControl>
            <Select
                placeholder='Выберите из списка...'
                color='blackAlpha.700'
                border='1px solid'
                borderColor='blackAlpha.200'
                size='md'
                sx={{
                    paddingRight: '44px',
                }}
            >
                <option value='option1'>Морковь</option>
                <option value='option2'>Цитрус</option>
            </Select>
        </Box>
    </>
);

export default Searchbar;

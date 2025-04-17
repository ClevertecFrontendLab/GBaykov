import {
    Box,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Hide,
    Image,
    Show,
    Text,
} from '@chakra-ui/react';
import { FC } from 'react';

import { ActionButton } from '~/components/ActionButton/ActionButton';
import { LikesIcon } from '~/icons/likes';
import { SavedIcon } from '~/icons/saved';
import { Recipe } from '~/types';

export type RecipeProps = {
    recipe: Recipe;
};

const NewRecipeCard: FC<RecipeProps> = ({ recipe }) => {
    const { category, image, title, description, bookmarks, likes } = recipe;
    // const icon = NAVIGATION_ITEMS;
    return (
        <Card
            boxShadow='none'
            border='1px solid'
            borderColor='blackAlpha.200'
            minW={{ base: '158px', xl: '277px', '2xl': '322px' }}
            borderRadius={8}
            pb={{ base: '4px', md: '8px', lg: '12px', '2xl': '20px' }}
            _hover={{
                boxShadow:
                    '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
            }}
        >
            <Hide above='lg'>
                {category.icon && (
                    <Box
                        position='absolute'
                        display='flex'
                        alignItems='center'
                        bg='lime.150'
                        borderRadius={4}
                        padding='2px 4px'
                        top={2}
                        left={2}
                        maxW='142px'
                    >
                        <Image src={category.icon} boxSize={4} />
                        <Text isTruncated as='span' fontSize='sm'>
                            {category.map((item) => item)}
                        </Text>
                    </Box>
                )}
            </Hide>
            <CardHeader p={0}>
                <Image
                    objectFit='cover'
                    src={image}
                    alt='dish'
                    borderTopRadius={8}
                    w={{ base: '158px', lg: '277px', xl: '322px' }}
                    h={{ base: '128px', lg: '230px' }}
                />
            </CardHeader>
            {/* <Flex>

            </Flex> */}
            <CardBody p={{ base: '8px', lg: '12px 12px 24px 12px', '2xl': '16px 24px 24px 24px' }}>
                <Text
                    mb={2}
                    noOfLines={{ base: 2, lg: 1 }}
                    fontSize={{ base: 'md', lg: 'lg', xl: 'xl' }}
                    lineHeight={{ base: 'sesquialteral', lg: 'tall', xl: 'base' }}
                    fontWeight='medium'
                    textAlign='start'
                >
                    {title}
                </Text>
                <Show above='lg'>
                    <Text h='64px' noOfLines={3} fontSize='sm' lineHeight='base' textAlign='start'>
                        {description}
                    </Text>
                </Show>
            </CardBody>
            <CardFooter
                p={{ base: '0 8px', lg: '0 12px', xl: '0 24px' }}
                justifyContent='space-between'
            >
                <Show above='lg'>
                    {category.icon && (
                        <Box
                            display='flex'
                            alignItems='center'
                            bg='lime.150'
                            borderRadius={4}
                            // padding='2px 8px'
                            gap={2}
                            h={6}
                        >
                            <Image src={category.icon} boxSize={4} />
                            <Text isTruncated as='span' fontSize='sm'>
                                {category.map((item) => item)}
                            </Text>
                        </Box>
                    )}
                </Show>
                <ButtonGroup h={6} gap={2}>
                    {bookmarks && (
                        <ActionButton
                            actionIcon={<SavedIcon />}
                            text={String(bookmarks)}
                            key='bookmarks-count'
                            color='lime.600'
                            fontSize='xs'
                        />
                    )}
                    {likes && (
                        <ActionButton
                            actionIcon={<LikesIcon />}
                            text={String(likes)}
                            key='likes-count'
                            color='lime.600'
                            fontSize='xs'
                        />
                    )}
                </ButtonGroup>
            </CardFooter>
        </Card>
    );
};

export default NewRecipeCard;

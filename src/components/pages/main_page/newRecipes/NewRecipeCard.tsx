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
import { NewRecipeType } from '~/components/database/newRecipesData';
import { LikesIcon } from '~/icons/likes';
import { SavedIcon } from '~/icons/saved';

export type RecipeProps = {
    recipe: NewRecipeType;
};

const NewRecipeCard: FC<RecipeProps> = ({ recipe }) => {
    const { category, image, title, description, icons } = recipe;
    return (
        <Card
            minW={{ base: '158px', lg: '277px', xl: '322px' }}
            borderRadius={8}
            pb={{ lg: 3 }}
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
                            {category.value}
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
            <CardBody p={{ base: 2, lg: 3 }}>
                <Text
                    noOfLines={{ base: 2, lg: 1 }}
                    as='h3'
                    fontSize={{ base: 'md', lg: 'lg', xl: 'xl' }}
                    lineHeight={{ base: 'sesquialteral', xl: 'base' }}
                    fontWeight='medium'
                    textAlign='start'
                >
                    {title}
                </Text>
                <Show above='lg'>
                    <Text noOfLines={3} fontSize='sm' textAlign='start' lineHeight='base'>
                        {description}
                    </Text>
                </Show>
            </CardBody>
            <CardFooter py={0} p={2} mt={{ lg: 3 }} justifyContent='space-between'>
                <Show above='lg'>
                    {category.icon && (
                        <Box
                            display='flex'
                            alignItems='center'
                            bg='lime.150'
                            borderRadius={4}
                            padding='2px 8px'
                            gap={2}
                            h={6}
                        >
                            <Image src={category.icon} boxSize={4} />
                            <Text isTruncated as='span' fontSize='sm'>
                                {category.value}
                            </Text>
                        </Box>
                    )}
                </Show>
                <ButtonGroup gap={2} p={1}>
                    {icons.map(({ actionIcon, value }, i) => (
                        <ActionButton
                            actionIcon={actionIcon === 'saved' ? <SavedIcon /> : <LikesIcon />}
                            text={value}
                            key={i}
                            color='lime.600'
                            fontSize='xs'
                        />
                    ))}
                </ButtonGroup>
            </CardFooter>
        </Card>
    );
};

export default NewRecipeCard;

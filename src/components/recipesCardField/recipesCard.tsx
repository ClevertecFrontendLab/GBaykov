import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardHeader,
    Center,
    HStack,
    Image,
    Text,
} from '@chakra-ui/react';
import { FC } from 'react';

import { LikesIcon } from '~/icons/likes';
import { SavedIcon } from '~/icons/saved';
import { RecipeCardType } from '~/types';

import { ActionButton } from '../ActionButton/ActionButton';

export type RecipeCardProps = {
    recipe: RecipeCardType;
};

const RecipeCard: FC<RecipeCardProps> = ({ recipe }) => {
    const { category, image, title, description, icons, recommendation } = recipe;
    return (
        <Card
            display='flex'
            flexDirection='row'
            w='100%'
            flex={{ base: 'none', md: '1 1 calc(50% - 12px)', xl: '1 1 calc(50% - 20px)' }}
            _hover={{
                boxShadow:
                    '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
            }}
        >
            <CardHeader p={0} flexShrink={0}>
                <Box
                    display={{ base: 'flex', lg: 'none' }}
                    top={2}
                    left={2}
                    padding='2px 4px'
                    position='absolute'
                    alignItems='center'
                    bg='lime.50'
                    borderRadius={4}
                >
                    <Image src={category.icon} boxSize={4} />
                    <Box as='span' fontSize='sm'>
                        {category.value}
                    </Box>
                </Box>
                {recommendation && (
                    <Box
                        position='absolute'
                        bottom={5}
                        left={6}
                        gap={2}
                        display={{ base: 'none', xl: 'flex' }}
                        alignItems='center'
                        bg='lime.150'
                        borderRadius={4}
                        padding='2px 4px'
                    >
                        <Image src={recommendation?.avatar} boxSize={4} />
                        <Box as='span' fontSize='sm'>
                            {recommendation?.userName} рекомендует
                        </Box>
                    </Box>
                )}
                <Image
                    maxW='346px'
                    src={image}
                    w={{ base: '158px', xl: '346px' }}
                    h={{ base: '128px', xl: '244px' }}
                    objectFit='fill'
                    alt='dush'
                    borderLeftRadius={8}
                />
            </CardHeader>
            <CardBody
                px={{ base: 2, xl: 6 }}
                py={{ base: 2, xl: 5 }}
                display='flex'
                flexDirection='column'
                justifyContent='space-between'
            >
                <Box>
                    <HStack justifyContent='space-between'>
                        <Box
                            display={{ base: 'none', xl: 'flex' }}
                            alignItems='center'
                            bg='lime.50'
                            borderRadius={4}
                            padding='2px 4px'
                            gap={2}
                        >
                            <Image src={category.icon} boxSize={4} />
                            <Box as='span' fontSize='sm'>
                                {category.value}
                            </Box>
                        </Box>
                        <ButtonGroup gap={2} p={1}>
                            {icons.map(({ actionIcon, value }, i) => (
                                <ActionButton
                                    actionIcon={
                                        actionIcon === 'saved' ? <SavedIcon /> : <LikesIcon />
                                    }
                                    text={value}
                                    key={i}
                                    color='lime.600'
                                />
                            ))}
                        </ButtonGroup>
                    </HStack>

                    <Text
                        fontWeight='medium'
                        noOfLines={{ base: 0, xl: 1 }}
                        fontSize={{ base: 'md', lg: 'xl' }}
                        lineHeight={{ base: 'sesquialteral', lg: 'base' }}
                        mt={{ base: 0, lg: 6 }}
                        textAlign='start'
                    >
                        {' '}
                        {title}
                    </Text>
                    <Text
                        fontSize='sm'
                        mt={2}
                        noOfLines={3}
                        display={{ base: 'none', lg: '-webkit-box' }}
                        fontWeight='normal'
                        textAlign='start'
                    >
                        {description}
                    </Text>
                </Box>

                <Box
                    display='flex'
                    flexDirection='row'
                    alignItems='center'
                    justifyContent='end'
                    gap={4}
                >
                    <Center
                        gap={2}
                        fontWeight='base'
                        fontSize='sm'
                        lineHeight='semibold'
                        w={{ base: 6, lg: 'auto' }}
                        h={{ base: 6, lg: '100%' }}
                        border='1px solid'
                        borderColor='blackAlpha.600'
                        borderRadius={6}
                        px={{ base: 0, lg: 3 }}
                    >
                        <SavedIcon />
                        <Box as='span' display={{ base: 'none', lg: 'inline' }}>
                            Сохранить
                        </Box>
                    </Center>

                    <Button
                        maxH={{ base: 6, lg: 8 }}
                        bg='black'
                        color='white'
                        fontSize={{ base: 'xs', lg: 'sm' }}
                        fontWeight='semibold'
                        px={{ base: 2, lg: 3 }}
                        border='1px solid'
                        borderColor='blackAlpha.200'
                        lineHeight={{ base: 'short', lg: 'base' }}
                    >
                        Готовить
                    </Button>
                </Box>
            </CardBody>
        </Card>
    );
};

export default RecipeCard;

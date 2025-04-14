import { Box, ButtonGroup, Card, Flex, Image, Text } from '@chakra-ui/react';

import { LikesIcon } from '~/icons/likes';
import { SavedIcon } from '~/icons/saved';
import { AdditionalRecipe } from '~/types';

import { ActionButton } from '../ActionButton/ActionButton';

const AdditionalRecipeCard = ({
    recipe: { title, description, category, icons },
}: {
    recipe: AdditionalRecipe;
}) => (
    <Card
        border='1px solid'
        borderColor='blackAlpha.200'
        borderRadius={8}
        p={3}
        w={{ base: '100%', '2xl': '322px' }}
        _hover={{
            boxShadow:
                '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
        }}
    >
        <Box display='flex' flexDirection='column' gap={6}>
            <Box display='flex' flexDirection='column' gap={2}>
                <Text
                    isTruncated
                    as='h3'
                    fontSize='md'
                    fontWeight='medium'
                    lineHeight='sesquialteral'
                >
                    {title}
                </Text>
                <Text noOfLines={3} fontSize='sm' fontWeight='normal' lineHeight='base'>
                    {description}
                </Text>
            </Box>
            <Flex justifyContent='space-between'>
                <Flex
                    alignItems='center'
                    bg='lime.50'
                    borderRadius={4}
                    padding='2px 8px'
                    top={2}
                    left={2}
                    flexShrink={0}
                >
                    <Image src={category.icon} boxSize={4} />
                    <Box as='span' fontSize='sm'>
                        {category.value}
                    </Box>
                </Flex>
                <ButtonGroup gap={2} p={1}>
                    {icons.map(({ actionIcon, value }, i) => (
                        <ActionButton
                            actionIcon={actionIcon === 'saved' ? <SavedIcon /> : <LikesIcon />}
                            text={value}
                            key={i}
                            color='lime.600'
                        />
                    ))}
                </ButtonGroup>
            </Flex>
        </Box>
    </Card>
);
export default AdditionalRecipeCard;

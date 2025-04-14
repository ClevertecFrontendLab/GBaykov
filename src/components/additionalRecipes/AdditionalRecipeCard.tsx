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
        boxShadow='none'
        border='1px solid'
        borderColor='blackAlpha.200'
        borderRadius={8}
        p={{ base: 3, lg: 4, '2xl': '24px 24px 20px 24px' }}
        w={{ base: '100%', '2xl': '322px' }}
        maxH={{ base: '168px', lg: '180px', '2xl': '192px' }}
        _hover={{
            boxShadow:
                '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
        }}
    >
        <Box display='flex' flexDirection='column' gap='24px'>
            <Box display='flex' flexDirection='column' gap='8px'>
                <Text
                    isTruncated
                    fontWeight='medium'
                    fontSize={{ base: 'md', lg: 'xl' }}
                    lineHeight={{ base: 'sesquialteral', lg: 'base' }}
                >
                    {title}
                </Text>
                <Text noOfLines={3} fontSize='sm' fontWeight='normal' lineHeight='base'>
                    {description}
                </Text>
            </Box>
            <Flex justifyContent='space-between' maxH='24px'>
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

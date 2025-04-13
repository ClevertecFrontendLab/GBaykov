import { ButtonGroup } from '@chakra-ui/react';
import { FC } from 'react';

import { LikesIcon } from '~/icons/likes';
import { SavedIcon } from '~/icons/saved';
import { VisitsIcon } from '~/icons/visits';

import { ActionButton } from '../ActionButton/ActionButton';

type UserNotificationType = {
    direction: 'horizontal' | 'vertical' | undefined;
};
const UserNotification: FC<UserNotificationType> = ({ direction = 'horizontal' }) => (
    <ButtonGroup orientation={direction} gap={{ lg: 6 }}>
        <ActionButton
            actionIcon={<SavedIcon />}
            text='185'
            color='lime.600'
            px={2}
            lineHeight='sesquialteral'
            fontSize='md'
        />
        <ActionButton
            actionIcon={<VisitsIcon />}
            text='589'
            color='lime.600'
            px={2}
            lineHeight='sesquialteral'
            fontSize='md'
        />
        <ActionButton
            actionIcon={<LikesIcon />}
            text='587'
            color='lime.600'
            px={2}
            lineHeight='sesquialteral'
            fontSize='md'
        />
    </ButtonGroup>
);
export default UserNotification;

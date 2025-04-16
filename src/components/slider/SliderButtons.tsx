import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { useSwiper } from 'swiper/react';

export const SwiperButtonNext = () => {
    const swiper = useSwiper();
    return (
        <Button
            onClick={() => swiper.slideNext()}
            leftIcon={<ArrowForwardIcon color='lime.50' boxSize={4} />}
            iconSpacing={0}
            boxSize={10}
            bg='black'
            position='absolute'
            bottom={216}
            right={-2}
            zIndex={9}
        />
    );
};

export const SwiperButtonPrev = () => {
    const swiper = useSwiper();
    return (
        <Button
            onClick={() => swiper.slidePrev()}
            leftIcon={<ArrowBackIcon color='lime.50' boxSize={4} />}
            iconSpacing={0}
            boxSize={10}
            bg='black'
            position='absolute'
            bottom={216}
            left={-2}
            zIndex={999}
        />
    );
};

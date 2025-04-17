import './slider.css';

import { Show } from '@chakra-ui/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { RECIPES } from '../database/recipes';
import NewRecipeCard from '../pages/main_page/newRecipes/NewRecipeCard';
import { SwiperButtonNext, SwiperButtonPrev } from './SliderButtons';

const Slider = () => (
    <>
        <Swiper
            loop={true}
            style={{ overflow: 'hidden' }}
            pagination={{
                clickable: true,
            }}
            navigation={false}
            modules={[Pagination, Navigation]}
            breakpoints={{
                320: {
                    slidesPerView: 2,
                    spaceBetween: 12,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 12,
                },

                1440: {
                    slidesPerView: 3,
                    spaceBetween: 12,
                },
                1920: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                },
            }}
        >
            <Show above='lg'>
                <SwiperButtonNext />
                <SwiperButtonPrev />
            </Show>
            {RECIPES.map((recipe) => (
                <SwiperSlide>
                    <NewRecipeCard key={recipe.id} recipe={recipe}></NewRecipeCard>
                </SwiperSlide>
            ))}
        </Swiper>
    </>
);

export default Slider;

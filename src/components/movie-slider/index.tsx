import { FC, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import s from './movie-slider.module.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

interface MovieSliderProps {
  title: string;
  data: any;
}

export const MovieSlider: FC<MovieSliderProps> = ({ title, data }) => {
  return (
    <>
      <h2 className={s.movieSliderTitle}>{title}</h2>
      <Swiper
        navigation={true}
        grabCursor={false}
        draggable={false}
        loop={true}
        className={s.movieSlider}
        breakpoints={{
          1350: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          998: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          625: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          0: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
      >
        {data &&
          data.map((movie: any) => (
            <SwiperSlide className={s.movieSliderSlide}>
              <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

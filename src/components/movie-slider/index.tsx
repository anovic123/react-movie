import { FC, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import s from './movie-slider.module.scss';
import { MovieTypeResult } from '../../common/types/movies';
import { Skeleton } from '../skeleton';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

interface MovieSliderProps {
  title: string;
  data: MovieTypeResult[];
  loading: boolean;
}

export const MovieSlider: FC<MovieSliderProps> = ({ title, data, loading }) => {
  const movies = data.map((movie) => (
    <SwiperSlide className={s.movieSliderSlide}>
      <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
    </SwiperSlide>
  ));

  const skeletons = [...new Array(8)].map((_, index) => (
    <SwiperSlide className={s.movieSliderSlide}>
      <Skeleton key={index} />
    </SwiperSlide>
  ));

  return (
    <>
      <h2 className={s.movieSliderTitle}>{!loading && title}</h2>
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
        {loading ? skeletons : movies}
      </Swiper>
    </>
  );
};

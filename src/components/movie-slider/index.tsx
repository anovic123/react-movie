import { FC } from 'react';
import { v1 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useNavigate } from 'react-router-dom';

import { MovieTypeResult } from '../../common/types/movies';

import { Skeleton } from '../skeleton';

import { imageUrl } from '../../utils/constants';

import s from './movie-slider.module.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

interface MovieSliderProps {
  title: string;
  data: MovieTypeResult[];
  loading: boolean;
}

export const MovieSlider: FC<MovieSliderProps> = ({ title, data, loading }) => {
  const navigate = useNavigate();

  const movies = data.map((movie) => (
    <SwiperSlide key={v1()} className={s.movieSliderSlide}>
      <img
        onClick={() => navigate(`/movies/${movie.id}`)}
        src={`${imageUrl}${movie.poster_path}`}
      />
    </SwiperSlide>
  ));

  const skeletons = [...new Array(6)].map((_) => <Skeleton key={v1()} />);

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
        {loading ? <SwiperSlide className={s.movieSliderSlide}>{skeletons}</SwiperSlide> : movies}
      </Swiper>
    </>
  );
};

import { FC } from 'react';
import { v1 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useNavigate } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

import { MovieTypeResult } from '../../common/types/movies';

import { Skeleton } from '../skeleton';

import { imageUrl } from '../../utils/constants';

import s from './movie-slider.module.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

interface MovieSliderProps {
  title: string;
  data: MovieTypeResult[];
  type: string;
  loading: boolean;
}

export const MovieSlider: FC<MovieSliderProps> = ({ title, data, loading, type }) => {
  const navigate = useNavigate();

  const movies = data.map((movie) => (
    <SwiperSlide key={v1()} className={s.movieSliderSlide}>
      <LazyLoad className={s.movieSliderLoader}>
        <img
          onClick={() => navigate(`/${type}/${movie.id}`)}
          src={`${imageUrl}${movie.poster_path}`}
          loading="lazy"
        />
      </LazyLoad>
    </SwiperSlide>
  ));

  const skeletons = [...new Array(10)].map((_) => (
    <SwiperSlide key={v1()} className={s.movieSliderSlide}>
      <Skeleton />
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
        {loading ? (
          skeletons
        ) : (
          <>
            {movies.length ? (
              movies
            ) : (
              <SwiperSlide className={s.movieSliderSlide}>
                <div>No movies found.</div>
              </SwiperSlide>
            )}
          </>
        )}
      </Swiper>
    </>
  );
};

import { FC, useEffect } from 'react';

import { AiFillPlayCircle, AiFillInfoCircle } from 'react-icons/ai';

import { useAppDispatch, useAppSelector } from '../../hooks';

import { setRandomMovie } from '../../store/slice/movies';
import { getMovies } from '../../store/thunks/movies';

import { Button } from '../ui/Button';

import s from './banner.module.scss';

interface BannerProps {}

export const Banner: FC<BannerProps> = ({}) => {
  const dispatch = useAppDispatch();

  const { moviesData, randomMovieIndex } = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies('popular')).then(() => {
      dispatch(setRandomMovie());
    });
  }, []);

  const randomMovie = moviesData[randomMovieIndex];
  console.log('🚀 ~ file: index.tsx:25 ~ randomMovie:', randomMovie);

  return (
    <div className={s.banner}>
      <div className={s.bannerContainer}>
        <div className={s.bannerTop}>
          <img
            src={`https://image.tmdb.org/t/p/original/${
              randomMovie?.backdrop_path || moviesData?.poster_path
            }`}
          />
        </div>
        <div className={s.bannerContent}>
          <h1 className={s.bannerContentTitle}>{randomMovie?.title}</h1>
          <p className={s.bannerContentDescription}>{randomMovie?.overview}</p>
        </div>
        <div className={s.bannerActions}>
          <Button size="small" variant="border" startIcon={<AiFillPlayCircle />}>
            Play
          </Button>
          <Button size="small" variant="primary" startIcon={<AiFillInfoCircle />}>
            More Info
          </Button>
        </div>
      </div>
      <div className={s.bannerBlur} />
    </div>
  );
};

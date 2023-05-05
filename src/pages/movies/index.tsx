import { FC, useEffect } from 'react';
import { v1 } from 'uuid';

import { Card, Pagination, Slider } from '../../components';
import { SkeletonCard } from '../../components/card/skeleton-card';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { getPlayingMovies } from '../../store/thunks/movies';

import { imageUrl } from '../../utils/constants';

import PureImg from '../../assets/pure-img.png';

import s from './movies.module.scss';

interface MoviesProps {}

export const MoviesPage: FC<MoviesProps> = ({}) => {
  const dispatch = useAppDispatch();

  const { playingMovies, playingMoviesLoading } = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getPlayingMovies(1));
  }, [dispatch]);

  const handlePrevClick = () => {
    if (playingMovies.page > 1) {
      dispatch(getPlayingMovies(playingMovies.page - 1));
    }
  };

  const handleNextClick = () => {
    dispatch(getPlayingMovies(playingMovies.page + 1));
  };

  const cards = playingMovies?.results?.map((res) => {
    const posterUrlPath = `${imageUrl}${res.backdrop_path}`;

    return (
      <Card
        key={res.id}
        id={res.id}
        poster={res.backdrop_path === null ? PureImg : posterUrlPath}
        title={res.title}
        rating={res.vote_average}
        type="movie"
      />
    );
  });

  const skeletons = [...new Array(20)].map((_) => <SkeletonCard key={v1()} />);

  return (
    <section className={s.movies}>
      <Slider
        data={playingMovies?.results?.slice(0, 10)}
        loading={playingMoviesLoading}
        type="movie"
      />
      <div className={s.moviesContainer}>
        <ul className={s.moviesList}>{playingMoviesLoading ? skeletons : cards?.slice(0, 10)}</ul>
        {!playingMoviesLoading && (
          <Pagination
            currentPage={playingMovies.page}
            totalPages={playingMovies.total_pages}
            onNextClick={handleNextClick}
            onPrevClick={handlePrevClick}
          />
        )}
      </div>
    </section>
  );
};

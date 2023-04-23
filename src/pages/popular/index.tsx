import { FC, useEffect } from 'react';
import { v1 } from 'uuid';

import { Card, Pagination, Slider } from '../../components';
import { SkeletonCard } from '../../components/card/skeleton-card';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { getPopularMovies } from '../../store/thunks/movies';

import { imageUrl } from '../../utils/constants';

import PureImg from '../../assets/pure-img.png';

import s from './popular.module.scss';

interface PopularPageProps {}

export const PopularPage: FC<PopularPageProps> = ({}) => {
  const dispatch = useAppDispatch();

  const { popularMovies, popularMoviesLoading } = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getPopularMovies(1));
  }, [dispatch]);

  const handlePrevClick = () => {
    if (popularMovies.page > 1) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      dispatch(getPopularMovies(popularMovies.page - 1));
    }
  };

  const handleNextClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    dispatch(getPopularMovies(popularMovies.page + 1));
  };

  const cards = popularMovies?.results?.map((res) => {
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
    <section className={s.popular}>
      <Slider
        data={popularMovies?.results?.slice(0, 10)}
        loading={popularMoviesLoading}
        type="movie"
      />
      <div className={s.popularContainer}>
        <ul className={s.popularList}>{popularMoviesLoading ? skeletons : cards}</ul>
        {!popularMoviesLoading && (
          <Pagination
            currentPage={popularMovies.page}
            totalPages={popularMovies.total_pages}
            onNextClick={handleNextClick}
            onPrevClick={handlePrevClick}
          />
        )}
      </div>
    </section>
  );
};

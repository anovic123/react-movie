import { FC, useState, useEffect } from 'react';

import { Banner, MovieSlider } from '../../components';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import {
  getComedyMovies,
  getDocumentaryMovies,
  getHorrorMovies,
  getNetflixMovies,
  getRomanceMovies,
} from '../../store/thunks/movies';

import s from './home.module.scss';

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ({}) => {
  const dispatch = useAppDispatch();

  const {
    horrorMovies,
    comedyMovies,
    documentaryMovies,
    netflixMovies,
    romanceMovies,
    horrorMoviesLoading,
    comedyMoviesLoading,
    documentaryMoviesLoading,
    netflixMoviesLoading,
    romanceMoviesLoading,
  } = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getHorrorMovies());
    dispatch(getComedyMovies());
    dispatch(getDocumentaryMovies());
    dispatch(getNetflixMovies());
    dispatch(getRomanceMovies());
  }, []);

  return (
    <section className={s.home}>
      <div className={s.homeSlider}>
        <Banner />
      </div>
      <MovieSlider
        title="Netflix Original"
        type="tv"
        data={netflixMovies}
        loading={comedyMoviesLoading}
      />
      <MovieSlider title="Horror" type="movie" data={horrorMovies} loading={horrorMoviesLoading} />
      <MovieSlider
        title="Comedy"
        type="movie"
        data={comedyMovies}
        loading={documentaryMoviesLoading}
      />
      <MovieSlider
        title="Romance"
        type="movie"
        data={romanceMovies}
        loading={netflixMoviesLoading}
      />
      <MovieSlider
        title="Documentary"
        type="movie"
        data={documentaryMovies}
        loading={romanceMoviesLoading}
      />
    </section>
  );
};

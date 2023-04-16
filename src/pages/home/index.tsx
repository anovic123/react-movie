import { FC, useState, useEffect } from 'react';

import { Banner } from '../../components/banner';
import { MovieSlider } from '../../components/movie-slider';

import { useAppDispatch, useAppSelector } from '../../hooks';

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
      <MovieSlider title="Horror" data={horrorMovies} loading={horrorMoviesLoading} />
      <MovieSlider title="Netflix Original" data={netflixMovies} loading={comedyMoviesLoading} />
      <MovieSlider title="Comedy" data={comedyMovies} loading={documentaryMoviesLoading} />
      <MovieSlider title="Romance" data={romanceMovies} loading={netflixMoviesLoading} />
      <MovieSlider title="Documentary" data={documentaryMovies} loading={romanceMoviesLoading} />
    </section>
  );
};

import { FC, useState, useEffect } from 'react';

import { Banner } from '../../components/banner';
import { MovieSlider } from '../../components/movie-slider';

import { useAppDispatch, useAppSelector } from '../../hooks';

import {
  getComedyMovies,
  getDocumentaryMovies,
  getHorrorMovies,
  getNetflixMovies,
} from '../../store/thunks/movies';

import s from './home.module.scss';

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ({}) => {
  const dispatch = useAppDispatch();

  const { horrorMovies, comedyMovies, documentaryMovies, netflixMovies } = useAppSelector(
    (state) => state.movies,
  );

  useEffect(() => {
    dispatch(getHorrorMovies());
    dispatch(getComedyMovies());
    dispatch(getDocumentaryMovies());
    dispatch(getNetflixMovies());
  }, []);

  return (
    <section className={s.home}>
      <div className={s.homeSlider}>
        <Banner />
      </div>
      <MovieSlider title="Horror" data={horrorMovies} />
      <MovieSlider title="Comedy" data={comedyMovies} />
      <MovieSlider title="Documentary" data={documentaryMovies} />
      <MovieSlider title="Netflix Original" data={netflixMovies} />
    </section>
  );
};

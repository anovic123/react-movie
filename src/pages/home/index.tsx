import { FC, useEffect } from 'react';
import { Helmet } from 'react-helmet';

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
      <Helmet>
        <title>React Movie</title>
        <meta name="description" content="Browse and discover popular movies and TV shows" />
      </Helmet>
      <div className={s.homeBanner}>
        <Banner />
      </div>
      <MovieSlider
        title="Netflix Original"
        type="tv"
        data={netflixMovies}
        loading={netflixMoviesLoading}
      />
      <MovieSlider title="Horror" type="movie" data={horrorMovies} loading={horrorMoviesLoading} />
      <MovieSlider title="Comedy" type="movie" data={comedyMovies} loading={comedyMoviesLoading} />
      <MovieSlider
        title="Romance"
        type="movie"
        data={romanceMovies}
        loading={romanceMoviesLoading}
      />
      <MovieSlider
        title="Documentary"
        type="movie"
        data={documentaryMovies}
        loading={documentaryMoviesLoading}
      />
    </section>
  );
};

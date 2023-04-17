import { FC, useEffect } from 'react';
import { v1 } from 'uuid';

import { useAppDispatch, useAppSelector } from '../../hooks';

import { getMovies } from '../../store/thunks/movies';

interface MoviesProps {}

export const MoviesPage: FC<MoviesProps> = ({}) => {
  const dispatch = useAppDispatch();

  const { moviesData } = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies('popular'));
  }, []);

  return (
    <div>
      MoviesPage
      {moviesData.map((movies) => (
        <h2 key={v1()}>{movies.title}</h2>
      ))}
    </div>
  );
};

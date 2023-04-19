import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './layout';

import { HomePage, MoviesPage, MoviesDetailPage, NotFoundPagePage, TvPage } from './pages';
import { ROUTES } from './utils/routes';

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
  return (
    <div className="app">
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.MOVIES} element={<MoviesPage />} />
          <Route path={ROUTES.MOVIES_DETAIL} element={<MoviesDetailPage />} />
          <Route path={ROUTES.TV} element={<TvPage />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFoundPagePage />} />
        </Route>
      </Routes>
    </div>
  );
};

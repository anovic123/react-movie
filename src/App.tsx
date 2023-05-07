import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './layout';

import {
  HomePage,
  MoviesDetailPage,
  NotFoundPagePage,
} from './pages';
import { CategoriesPage } from './pages/categories';

import { ROUTES } from './utils/routes';

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
  return (
    <div className="app">
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.MOVIES_DETAIL} element={<MoviesDetailPage />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFoundPagePage />} />
          <Route path={ROUTES.CATEGORIES} element={<CategoriesPage />} />
        </Route>
      </Routes>
    </div>
  );
};

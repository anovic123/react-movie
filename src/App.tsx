import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './layout';

import { HomePage, MoviesPage, MoviesDetailPage, NotFoundPagePage } from './pages';

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
  return (
    <div className="app">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/:category/:id" element={<MoviesDetailPage />} />
          <Route path="*" element={<NotFoundPagePage />} />
        </Route>
      </Routes>
    </div>
  );
};

import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './layout';

import { HomePage } from './pages/home';
import { MoviesPage } from './pages/movies';

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
  return (
    <div className="app">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
        </Route>
      </Routes>
    </div>
  );
};

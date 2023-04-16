import { FC, useState, useEffect } from 'react';
import { tmbdbApi } from '../../api/tmdbApi';
import { Banner } from '../../components/Banner';

import s from './home.module.scss';

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <section className={s.home}>
      <Banner />
    </section>
  );
};

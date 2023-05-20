import { FC } from 'react';
import { Helmet } from 'react-helmet';

import IMG from '.././../assets/404.png';

import s from './not-found.module.scss';

interface NotFoundPageProps {}

export const NotFoundPagePage: FC<NotFoundPageProps> = ({}) => {
  return (
    <section className={s.notFound}>
      <Helmet>
        <title>Page Not Found</title>
        <meta name="description" content="Sorry, the requested page was not found." />
      </Helmet>
      <img src={IMG} alt="Not Found" />
      <h1 className={s.notFoundTitle}>Page not found</h1>
      <p className={s.notFoundMessage}>Sorry, the requested page was not found.</p>
    </section>
  );
};

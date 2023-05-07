import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import s from './card.module.scss';
import { CircleRating } from '../circle-rating';

interface CardProps {
  id: number;
  poster: string;
  title: string;
  rating: number;
  type: string;
}

export const Card: FC<CardProps> = ({ id, poster, title, rating, type }) => {
  const navigate = useNavigate();

  return (
    <article className={s.card}>
      <div className={s.cardPosterContainer} onClick={() => navigate(`/${type}/${id}`)}>
        <LazyLoadImage
          src={poster}
          alt={title}
          className={s.tvCardPoster}
          effect="black-and-white"
        />
        <div className={s.cardRating}>
          <CircleRating rating={rating} />
        </div>
      </div>
      <div className={s.cardTitle}>{title}</div>
    </article>
  );
};

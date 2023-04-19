import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import s from './card.module.scss';

interface CardProps {
  id: number;
  poster: string;
  title: string;
  rating: number;
  type: string;
}

export const Card: FC<CardProps> = ({ id, poster, title, rating, type }) => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsDetailsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDetailsVisible(false);
  };
  return (
    <li className={s.tvCard} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={s.tvCardPosterContainer} onClick={() => navigate(`/${type}/${id}`)}>
        <img src={poster} alt={title} className={s.tvCardPoster} />
        <div className={`${s.tvCardDetails} ${isDetailsVisible ? s.visible : ''}`}>
          <div className={s.tvCardTitle}>{title}</div>
          {rating >= 1 &&  (
            <div className={s.tvCardRating} style={{ color: ` ${rating > 5 ? 'green' : 'red'}` }}>
              {rating}
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

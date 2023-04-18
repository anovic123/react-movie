import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { getCredits } from '../../store/thunks/details';

import s from './casts.module.scss';

interface CastsProps {
  id: string;
}

export const Casts: FC<CastsProps> = ({ id }) => {
  const dispatch = useAppDispatch();

  const { creditsData } = useAppSelector((state) => state.details);
  console.log('🚀 ~ file: index.tsx:15 ~ creditsData:', creditsData);

  useEffect(() => {
    dispatch(getCredits(id));
  }, [id]);

  return (
    <div className={s.cast}>
      <h2 className={s.castHeading}>Cast</h2>
      <div className={s.castList}>
        {/* @ts-ignore */}
        {creditsData?.cast?.slice(0, 4).map(({ name, character, profile_path }) => (
          <Link to="#" className={s.castItem}>
            <div
              className={s.castItemImage}
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${profile_path})`,
              }}
            />
            <div className={s.castItemName}>{name}</div>
            <div className={s.castItemCharacter}>{character}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

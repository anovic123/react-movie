import { FC, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { getCredits } from '../../store/thunks/details';

import { imageUrl } from '../../utils/constants';

import PureCast from '../../assets/pure-cast.png';

import s from './casts.module.scss';

interface CastsProps {
  id: number;
}

export const Casts: FC<CastsProps> = ({ id }) => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { creditsData } = useAppSelector((state) => state.details);

  useEffect(() => {
    dispatch(getCredits(id));
  }, [id]);

  return (
    <div className={s.cast}>
      <h2 className={s.castHeading}>{creditsData?.cast && 'Cast'}</h2>
      <div className={s.castList}>
        {creditsData?.cast?.slice(0, 4).map(({ id, name, character, profile_path }) => {
          const imageUrlPath = `url(${imageUrl}${profile_path})`;
          const pureImagePath = `url(${PureCast})`;

          return (
            <div key={id} onClick={() => navigate(`/actor/${id}`)} className={s.castItem}>
              <div
                className={s.castItemImage}
                style={{
                  backgroundImage: profile_path === null ? pureImagePath : imageUrlPath,
                }}
              />
              <div className={s.castItemName}>{name}</div>
              <div className={s.castItemCharacter}>{character}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

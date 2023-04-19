import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { getCredits } from '../../store/thunks/details';

import { imageUrl } from '../../utils/constants';

import s from './casts.module.scss';

interface CastsProps {
  id: number;
}

export const Casts: FC<CastsProps> = ({ id }) => {
  const dispatch = useAppDispatch();

  const { creditsData } = useAppSelector((state) => state.details);

  useEffect(() => {
    dispatch(getCredits(id));
  }, [id]);

  return (
    <div className={s.cast}>
      <h2 className={s.castHeading}>Cast</h2>
      <div className={s.castList}>
        {creditsData?.cast?.slice(0, 4).map(({ id, name, character, profile_path }) => {
          const imageUrlPath = `url(${imageUrl}${profile_path})`;
          const pureImagePath =
            'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlscp4xS0pQIkLFrSNCWhBGKTd_RR22pN9qy67ZJE7MielecRwJqHjnvBBrEbLCyUateE&usqp=CAU)';

          return (
            <Link key={id} to="#" className={s.castItem}>
              <div
                className={s.castItemImage}
                style={{
                  backgroundImage: profile_path === null ? pureImagePath : imageUrlPath,
                }}
              />
              <div className={s.castItemName}>{name}</div>
              <div className={s.castItemCharacter}>{character}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

import { FC } from 'react';

import { AiFillPlayCircle, AiFillInfoCircle } from 'react-icons/ai';
import { MovieTypeResult } from '../../common/types/movies';

import { Button } from '../ui/Button';

import s from './banner.module.scss';

interface BannerProps {
  randomMovie: MovieTypeResult;
}

export const Banner: FC<BannerProps> = ({ randomMovie }) => {
  return (
    <div className={s.banner} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path})` }}>
      <div className={s.bannerContainer}>
        <div className={s.bannerContent}>
          <h1 className={s.bannerContentTitle}>{randomMovie?.title}</h1>
          <p className={s.bannerContentDescription}>{randomMovie?.overview}</p>
          <div className={s.bannerContentActions}>
            <Button size="small" variant="border" startIcon={<AiFillPlayCircle />}>
              Play
            </Button>
            <Button size="small" variant="primary" startIcon={<AiFillInfoCircle />}>
              More Info
            </Button>
          </div>
        </div>
      </div>
      <div className={s.bannerBlur} />
    </div>
  );
};

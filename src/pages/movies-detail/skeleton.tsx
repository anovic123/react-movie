import { FC } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';

import { Button, Casts } from '../../components';

import s from './movies-detail.module.scss';

interface SkeletonProps {
  id?: number;
}

export const Skeleton: FC<SkeletonProps> = ({ id }) => {
  return (
    <>
      <div className={s.detailsPoster}>
        <div className={`${s.detailsPosterImgSkeleton} skeleton`} />
      </div>
      <div className={s.detailsContent}>
        <h1 className={`${s.detailsContentTitleSkeleton} skeleton`}></h1>
        <span className={`${s.detailsContentTaglineSkeleton} skeleton`}></span>
        <p className={`${s.detailsContentDescriptionSkeleton} skeleton`}></p>
        <p className={`${s.detailsContentDescriptionSkeleton} skeleton`}></p>
        <p className={`${s.detailsContentDescriptionSkeleton} skeleton`}></p>
        <div className={s.detailsContentContainer}>
          <div className={`${s.detailsContentDurationSkeleton} skeleton`}></div>
        </div>
        <div className={s.detailsContentContainer}>
          <div className={`${s.detailsContentGenreSkeleton} skeleton`}></div>
          <div className={`${s.detailsContentGenreSkeleton} skeleton`}></div>
          <div className={`${s.detailsContentGenreSkeleton} skeleton`}></div>
        </div>
        <Button variant="border" disabled startIcon={<AiFillPlayCircle />}>
          Play
        </Button>
      </div>
    </>
  );
};

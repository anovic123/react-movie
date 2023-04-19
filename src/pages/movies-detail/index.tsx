import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { getDetails } from '../../store/thunks/details';
import { getVideos } from '../../store/thunks/videos';

import { Casts } from '../../components/casts';

import { imageUrl } from '../../utils/constants';
import { convertDuration } from '../../utils/convertDuration';

import s from './movies-detail.module.scss';

interface MoviesDetailPageProps {}

export const MoviesDetailPage: FC<MoviesDetailPageProps> = ({}) => {
  const { id, category } = useParams();

  const dispatch = useAppDispatch();

  const { detailsData } = useAppSelector((state) => state.details);
  // console.log('🚀 ~ file: index.tsx:25 ~ detailsData:', detailsData);

  useEffect(() => {
    if (!id) {
      return;
    }
    dispatch(getDetails({ id, type: category || 'movie' }));
    dispatch(getVideos(Number(id)));
  }, [id]);

  return (
    <section className={s.details}>
      <div className={s.detailsImageContainer}>
        <div
          className={s.detailsImage}
          style={{
            backgroundImage: `url(${imageUrl}${
              detailsData?.backdrop_path || detailsData?.poster_path
            })`,
          }}
        ></div>
        <div className={s.detailsImageBlur}></div>
      </div>
      <div className={s.detailsContainer}>
        <div className={s.detailsPoster}>
          <img
            className={s.detailsPosterImg}
            src={`${imageUrl}${detailsData?.poster_path}`}
            alt={detailsData?.title}
          />
        </div>
        <div className={s.detailsContent}>
          <h1 className={s.detailsContentTitle}>
            {detailsData?.title || detailsData?.original_name}
          </h1>
          <span className={s.detailsContentTagline}>{detailsData?.tagline}</span>
          <p className={s.detailsContentDescription}>{detailsData?.overview}</p>
          <div className={s.detailsContentContainer}>
            <div className={s.detailsContentDuration}>
              {detailsData?.runtime && convertDuration(detailsData?.runtime)}
            </div>
            <div
              className={s.detailsContentRating}
              style={{ color: detailsData && detailsData?.vote_average > 6 ? 'green' : 'red' }}
            >
              <AiFillStar />
              {detailsData?.vote_average?.toFixed(2)}
            </div>
          </div>
          <div className={s.detailsContentContainer}>
            {detailsData?.genres &&
              detailsData?.genres.map((genre) => (
                <div key={genre?.id} className={s.detailsContentGenre}>
                  {genre?.name}
                </div>
              ))}
          </div>
          {detailsData?.id && <Casts id={detailsData?.id} />}
        </div>
      </div>
    </section>
  );
};

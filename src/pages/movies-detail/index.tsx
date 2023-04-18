import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { getDetails } from '../../store/thunks/details';
import { convertDuration } from '../../utils/converDuration';

import { Casts } from '../../components/casts';

import s from './movies-detail.module.scss';

interface MoviesDetailProps {}

export const MoviesDetail: FC<MoviesDetailProps> = ({}) => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const { detailsData } = useAppSelector((state) => state.details);
  // console.log('🚀 ~ file: index.tsx:14 ~ detailsData:', detailsData);

  useEffect(() => {
    if (!id) {
      return;
    }
    dispatch(getDetails(id));
  }, [id]);

  return (
    <section className={s.details}>
      <div className={s.detailsImageContainer}>
        <div
          className={s.detailsImage}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${
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
            src={`https://image.tmdb.org/t/p/original/${detailsData?.poster_path}`}
            alt={detailsData?.title}
          />
        </div>
        <div className={s.detailsContent}>
          <h1 className={s.detailsContentTitle}>{detailsData?.title}</h1>
          <span className={s.detailsContentTagline}>{detailsData?.tagline}</span>
          <p className={s.detailsContentDescription}>{detailsData?.overview}</p>
          <div className={s.detailsContentContainer}>
            <div className={s.detailsContentDuration}>
              {convertDuration(detailsData?.runtime || 0)}
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
              detailsData?.genres.map((genre: any) => (
                <div key={genre?.id} className={s.detailsContentGenre}>
                  {genre?.name}
                </div>
              ))}
          </div>
          <Casts id={detailsData?.id} />
        </div>
      </div>
    </section>
  );
};

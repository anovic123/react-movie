import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillStar, AiFillPlayCircle } from 'react-icons/ai';
import { Helmet } from 'react-helmet';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { getDetails, getReviews } from '../../store/thunks/details';
import { getVideos } from '../../store/thunks/videos';

import { Casts, Button, Modal, Reviews } from '../../components';

import { imageUrl } from '../../utils/constants';
import { convertDuration } from '../../utils/convertDuration';

import s from './movies-detail.module.scss';
import { Skeleton } from './skeleton';

interface MoviesDetailPageProps {}

export const MoviesDetailPage: FC<MoviesDetailPageProps> = ({}) => {
  const { id, category } = useParams();
  const dispatch = useAppDispatch();

  const [activeModal, setActiveModal] = useState<boolean>(false);

  const { videosData } = useAppSelector((state) => state.videos);
  const { detailsData, reviewsData, detailsDataLoading } = useAppSelector((state) => state.details);

  useEffect(() => {
    if (!id) {
      return;
    }
    dispatch(getDetails({ id, type: category || 'movie' }));
    dispatch(getVideos(Number(id)));
    dispatch(getReviews({ id, type: category || 'movie', page: 1 }));
  }, [id, category, dispatch]);

  const handleLoadMore = () => {
    if (!id) {
      return;
    }
    dispatch(getReviews({ id, type: category || 'movie', page: reviewsData.page + 1 }));
  };

  return (
    <section className={s.details}>
      <Helmet>
        <title>{detailsData?.title || detailsData?.original_name}</title>
        <meta name="description" content={detailsData?.overview} />
      </Helmet>
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
        {!detailsDataLoading ? (
          <>
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
                {detailsData?.runtime && (
                  <div className={s.detailsContentDuration}>
                    {convertDuration(detailsData?.runtime)}
                  </div>
                )}
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

              {videosData && (
                <Button
                  onClick={() => setActiveModal(true)}
                  variant="border"
                  startIcon={<AiFillPlayCircle />}
                >
                  Play
                </Button>
              )}
              {detailsData?.id && <Casts id={detailsData?.id} />}
            </div>
          </>
        ) : (
          <Skeleton id={detailsData?.id} />
        )}
      </div>

      {reviewsData?.results?.length >= 1 && (
        <div className={s.detailsReviewsContainer}>
          <Reviews
            currentPage={reviewsData.page}
            totalPages={reviewsData.total_pages}
            data={reviewsData.results}
            handleLoadMore={handleLoadMore}
          />
        </div>
      )}

      {videosData && (
        <Modal data={videosData[0]} activeModal={activeModal} setActiveModal={setActiveModal} />
      )}
    </section>
  );
};

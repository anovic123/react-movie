import { FC, useEffect, useState } from 'react';
import { AiFillPlayCircle, AiFillInfoCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { setRandomMovie } from '../../store/slice/movies';
import { getMovies } from '../../store/thunks/movies';
import { getVideos } from '../../store/thunks/videos';

import { Modal, Button } from '../';

import { imageUrl } from '../../utils/constants';

import { useMediaQuery } from '../../hooks/use-media-query';

import s from './banner.module.scss';

interface BannerProps {}

export const Banner: FC<BannerProps> = ({}) => {
  const [activeModal, setActiveModal] = useState<boolean>(false);

  const isTablet = useMediaQuery(768);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { videosData } = useAppSelector((state) => state.videos);
  const { moviesData, randomMovieIndex } = useAppSelector((state) => state.movies);

  const randomMovie = moviesData[randomMovieIndex];

  useEffect(() => {
    dispatch(getMovies('popular')).then(() => {
      dispatch(setRandomMovie());
    });
  }, []);

  useEffect(() => {
    if (randomMovie?.id) {
      dispatch(getVideos(randomMovie?.id));
    }
  }, [randomMovie?.id]);

  const bannerText = !isTablet
    ? randomMovie?.overview?.length > 270
      ? randomMovie?.overview?.slice(0, 270) + '...'
      : randomMovie?.overview
    : randomMovie?.overview?.length > 150
    ? randomMovie?.overview?.slice(0, 150) + '...'
    : randomMovie?.overview;

  return (
    <>
      <div
        className={s.banner}
        style={{
          backgroundImage: `url(${imageUrl}${randomMovie?.backdrop_path})`,
        }}
      >
        <div className={s.bannerContainer}>
          <div className={s.bannerContent}>
            <h1 className={s.bannerContentTitle}>{randomMovie?.title}</h1>
            <p className={s.bannerContentDescription}>{bannerText}</p>
            <div className={s.bannerContentActions}>
              {videosData && (
                <Button
                  onClick={() => setActiveModal(true)}
                  variant="border"
                  startIcon={<AiFillPlayCircle />}
                >
                  Play
                </Button>
              )}
              <Button
                variant="primary"
                startIcon={<AiFillInfoCircle />}
                onClick={() => navigate(`/movie/${randomMovie?.id}`)}
              >
                More Info
              </Button>
            </div>
          </div>
        </div>
        <div className={s.bannerBlur} />
      </div>
      {videosData && (
        <Modal data={videosData[0]} activeModal={activeModal} setActiveModal={setActiveModal} />
      )}
    </>
  );
};

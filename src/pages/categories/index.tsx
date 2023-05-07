import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { v1 } from 'uuid';

import { Card, Pagination, Slider } from '../../components';
import { SkeletonCard } from '../../components/card/skeleton-card';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { getTvPopular } from '../../store/thunks/tv';
import { getPlayingMovies, getPopularMovies } from '../../store/thunks/movies';

import { imageUrl } from '../../utils/constants';

import PureImg from '../../assets/pure-img.png';

import s from './categories.module.scss';

interface CategoriesPageProps {}

export const CategoriesPage: FC<CategoriesPageProps> = ({}) => {
  const navigate = useNavigate();
  const { type } = useParams();

  const dispatch = useAppDispatch();

  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  const { popularTvData, popularTvDataLoading } = useAppSelector((state) => state.tv);
  const { playingMovies, playingMoviesLoading } = useAppSelector((state) => state.movies);
  const { popularMovies, popularMoviesLoading } = useAppSelector((state) => state.movies);

  useEffect(() => {
    switch (type) {
      case 'tv':
        dispatch(getTvPopular(1));
        break;
      case 'movies':
        dispatch(getPlayingMovies(1));
        break;
      case 'new-and-popular':
        dispatch(getPopularMovies(1));
        break;
      default:
        navigate('/');
        break;
    }
  }, [dispatch, navigate, type]);

  useEffect(() => {
    switch (type) {
      case 'tv':
        setData(popularTvData);
        setLoading(popularTvDataLoading);
        break;
      case 'movies':
        setData(playingMovies);
        setLoading(playingMoviesLoading);
        break;
      case 'new-and-popular':
        setData(popularMovies);
        setLoading(popularMoviesLoading);
        break;
      default:
        setData({});
        setLoading(false);
        break;
    }
  }, [
    type,
    popularTvData,
    popularTvDataLoading,
    playingMovies,
    playingMoviesLoading,
    popularMovies,
    popularMoviesLoading,
  ]);

  const handlePrevClick = () => {
    if (data.page > 1) {
      switch (type) {
        case 'tv':
          dispatch(getTvPopular(data.page - 1));
          break;
        case 'movies':
          dispatch(getPlayingMovies(data.page - 1));
          break;
        case 'new-and-popular':
          dispatch(getPopularMovies(data.page - 1));
          break;
        default:
          alert('Error');
          break;
      }
    }
  };

  const handleNextClick = () => {
    if (data.page < data.total_pages) {
      switch (type) {
        case 'tv':
          dispatch(getTvPopular(data.page + 1));
          break;
        case 'movies':
          dispatch(getPlayingMovies(data.page + 1));
          break;
        case 'new-and-popular':
          dispatch(getPopularMovies(data.page + 1));
          break;
        default:
          alert('Error');
          break;
      }
    }
  };

  const skeletons = [...new Array(10)].map((_) => <SkeletonCard key={v1()} />);

  const typeLink = type === 'movies' || type === 'new-and-popular' ? 'movies' : 'tv';

  const cards = data?.results?.map((res: any) => {
    const posterUrlPath = `${imageUrl}${res.backdrop_path}`;

    return (
      <Card
        key={res.id}
        id={res.id}
        poster={res.backdrop_path === null ? PureImg : posterUrlPath}
        title={res.name}
        rating={res.vote_average}
        type={typeLink}
      />
    );
  });

  const sliderContent = data?.results?.filter((el: any) => el.backdrop_path !== undefined);

  return (
    <section className={s.tv}>
      <Slider data={sliderContent?.slice(0, 10)} loading={loading} type={typeLink} />
      <div className={s.tvContainer}>
        <div className={s.tvList}>{loading ? skeletons : cards?.slice(0, 10)}</div>
        {!loading && data && (
          <Pagination
            currentPage={data.page}
            totalPages={data.total_pages}
            onNextClick={handleNextClick}
            onPrevClick={handlePrevClick}
          />
        )}
      </div>
    </section>
  );
};

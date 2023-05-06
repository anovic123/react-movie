import { FC, useEffect } from 'react';
import { v1 } from 'uuid';

import { Card, Pagination, Slider } from '../../components';
import { SkeletonCard } from '../../components/card/skeleton-card';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { getTvPopular } from '../../store/thunks/tv';

import { imageUrl } from '../../utils/constants';

import PureImg from '../../assets/pure-img.png';

import s from './tv.module.scss';

interface TvPageProps {}

export const TvPage: FC<TvPageProps> = ({}) => {
  const dispatch = useAppDispatch();

  const { popularTvData, popularTvDataLoading } = useAppSelector((state) => state.tv);

  useEffect(() => {
    dispatch(getTvPopular(1));
  }, [dispatch]);

  const handlePrevClick = () => {
    if (popularTvData.page > 1) {
      dispatch(getTvPopular(popularTvData.page - 1));
    }
  };

  const handleNextClick = () => {
    dispatch(getTvPopular(popularTvData.page + 1));
  };

  const cards = popularTvData?.results?.map((res) => {
    const posterUrlPath = `${imageUrl}${res.backdrop_path}`;

    return (
      <Card
        key={res.id}
        id={res.id}
        poster={res.backdrop_path === null ? PureImg : posterUrlPath}
        title={res.name}
        rating={res.vote_average}
        type="tv"
      />
    );
  });

  const skeletons = [...new Array(20)].map((_) => <SkeletonCard key={v1()} />);

  return (
    <section className={s.tv}>
      <Slider
        data={popularTvData?.results?.slice(0, 10)}
        loading={popularTvDataLoading}
        type="tv"
      />
      <div className={s.tvContainer}>
        <ul className={s.tvList}>{popularTvDataLoading ? skeletons : cards?.slice(0, 10)}</ul>
        {!popularTvDataLoading && (
          <Pagination
            currentPage={popularTvData.page}
            totalPages={popularTvData.total_pages}
            onNextClick={handleNextClick}
            onPrevClick={handlePrevClick}
          />
        )}
      </div>
    </section>
  );
};

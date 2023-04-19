import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { v1 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { imageUrl } from '../../utils/constants';
import { Result } from '../../common/types/tv';

import s from './tv-slider.module.scss';
import { SkeletonSlider } from './skeleton-slider';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

interface TvSliderProps {
  data: Result[];
  loading: boolean;
}

export const TvSlider: FC<TvSliderProps> = ({ data, loading }) => {
  const navigate = useNavigate();

  const sliderImages = data?.map((el) => (
    <SwiperSlide>
      <img
        src={`${imageUrl}${el?.backdrop_path}`}
        className={s.tvSliderImg}
        onClick={() => navigate(`/tv/${el?.id}`)}
      />
    </SwiperSlide>
  ));

  const skeletons = [...new Array(10)].map((_) => (
    <SwiperSlide key={v1()}>
      <SkeletonSlider />
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper
        navigation={true}
        grabCursor={false}
        draggable={false}
        loop={true}
        spaceBetween={10}
        className={s.tvSlider}
        breakpoints={{
          1350: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          998: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          625: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        }}
      >
        {loading ? skeletons : sliderImages}
      </Swiper>
    </>
  );
};

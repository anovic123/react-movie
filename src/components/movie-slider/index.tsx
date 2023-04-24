import { FC, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v1 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Lazy } from 'swiper';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import { SkeletonSlider } from '../';

import { MovieTypeResult } from '../../common/types/movies';

import { imageUrl } from '../../utils/constants';

import s from './movie-slider.module.scss';
import 'react-lazy-load-image-component/src/effects/blur.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

interface MovieSliderProps {
  title: string;
  data: MovieTypeResult[];
  type: string;
  loading: boolean;
}

export const MovieSlider: FC<MovieSliderProps> = ({ title, data, loading, type }) => {
  const navigate = useNavigate();

  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const skeletons = [...new Array(20)].map((_) => (
    <SwiperSlide key={v1()} className={s.movieSliderSlide}>
      <SkeletonSlider />
    </SwiperSlide>
  ));

  const movies = data.map((movie) => (
    <SwiperSlide key={v1()} className={s.movieSliderSlide}>
      <LazyLoadImage
        className={s.movieSliderLoader}
        effect="blur"
        onClick={() => navigate(`/${type}/${movie.id}`)}
        src={`${imageUrl}${movie.poster_path}`}
        beforeLoad={() => setImageLoaded(true)}
      />
    </SwiperSlide>
  ));
  return (
    <>
      <h2 className={s.movieSliderTitle}>{!loading && title}</h2>
      <Swiper
        navigation={true}
        loop={true}
        className={s.movieSlider}
        breakpoints={{
          1350: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          998: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          625: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          0: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
      >
        {loading && !imageLoaded ? skeletons : <>{movies}</>}
      </Swiper>
    </>
  );
  //========================================================================================================================================================

  // const carouselContainer = useRef<HTMLDivElement>(null);

  // const navigation = (dir: any) => {
  //   const container = carouselContainer?.current;

  //   const scrollAmount =
  //     dir === 'left'
  //       ? //@ts-ignore
  //         container?.scrollLeft - (container?.offsetWidth + 20)
  //       : //@ts-ignore
  //         container?.scrollLeft + (container?.offsetWidth + 20);

  //   // @ts-ignore
  //   container.scrollTo({
  //     left: scrollAmount,
  //     behavior: 'smooth',
  //   });
  // };

  // return (
  //   <div className="carousel">
  //     <BsFillArrowLeftCircleFill
  //       className="carouselLeftNav arrow"
  //       onClick={() => navigation('left')}
  //     />
  //     <BsFillArrowRightCircleFill
  //       className="carouselRighttNav arrow"
  //       onClick={() => navigation('right')}
  //     />
  //     <div>
  //       {!loading ? (
  //         <div style={{ display: 'flex' }} ref={carouselContainer}>
  //           {data.map((el: any) => (
  //             <img
  //               className={s.movieSliderLoader}
  //               src={`${imageUrl}${el.poster_path}`}
  //               style={{ height: 200, width: 200 }}
  //             />
  //           ))}
  //         </div>
  //       ) : (
  //         <div style={{ display: 'flex' }}>
  //           <SkeletonSlider />
  //           <SkeletonSlider />
  //           <SkeletonSlider />
  //           <SkeletonSlider />
  //           <SkeletonSlider />
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // );
};

import { FC } from 'react';
import { v1 } from 'uuid';

import { Text } from '../text';
import { Button } from '../ui/button';

import { ResultViews } from '../../common/types/details';

import { convertDate } from '../../utils/convertDate';
import { checkUrl } from '../../utils/checkUrl';

import PureReviews from '../../assets/pure-reviews.png';

import s from './reviews.module.scss';


interface ReviewsProps {
  currentPage: number;
  totalPages: number;
  data: ResultViews[];
  handleLoadMore: () => void;
}

export const Reviews: FC<ReviewsProps> = ({ currentPage, totalPages, data, handleLoadMore }) => {
  return (
    <div className={s.reviews}>
      <h2 className={s.reviewsTitle}>Reviews</h2>
      <div className={s.reviewsInner}>
        {data?.map(({ author_details: { name, rating, avatar_path }, content, created_at }) => {
          const imgUrl = avatar_path?.substring(1);

          return (
            <div className={s.review} key={v1()}>
              <div className={s.reviewAvatar}>
                <img
                  src={avatar_path ? checkUrl(imgUrl) : PureReviews}
                  className={s.reviewAvatarImage}
                />
              </div>

              <div className={s.reviewContent}>
                <div className={s.reviewUser}>
                  <div className={s.reviewHeader}>
                    <div className={s.reviewAuthor}>{name || 'Anonim'},</div>
                    <div className={s.reviewDate}>{convertDate(created_at)}</div>
                  </div>

                  {rating && (
                    <div className={s.reviewRating}>
                      <span style={{ color: rating > 5 ? 'green' : 'red' }}>{rating}</span> / 10
                    </div>
                  )}
                </div>

                <div className={s.reviewContent}>
                  <Text text={content} />
                </div>
              </div>
            </div>
          );
        })}
        <Button
          onClick={handleLoadMore}
          disabled={currentPage >= totalPages}
          style={{ margin: '0 auto' }}
        >
          Load More
        </Button>
      </div>
    </div>
  );
};

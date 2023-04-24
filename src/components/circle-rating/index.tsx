import { FC } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import './circle-rating.scss';
import 'react-circular-progressbar/dist/styles.css';

interface CircleRatingProps {
  rating: any;
  className?: any;
}

export const CircleRating: FC<CircleRatingProps> = ({ rating, className }) => {
  return (
    <div className="circleRating">
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        className={className}
        styles={buildStyles({
          pathColor: rating < 5 ? 'red' : rating < 7 ? 'orange' : 'green',
        })}
      />
    </div>
  );
};

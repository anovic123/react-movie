import { DetailedHTMLProps, FC, HTMLAttributes, useEffect, useState } from 'react';
import cn from 'classnames';
import { AiFillStar } from 'react-icons/ai';

import s from './rating.module.scss';

interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEditable?: boolean;
  rating: number;
  handleVote?: any;
  setRating?: (rating: number) => void;
}

export const Rating: FC<RatingProps> = ({
  isEditable = false,
  rating,
  setRating,
  className,
  handleVote,
  ...props
}) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(10).fill(<></>));

  useEffect(() => {
    constructRating(Math.floor(rating));
    // handleVote(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          className={cn(s.star, {
            [s.filled]: i < currentRating,
            [s.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => {
            onClick(i + 1);
          }}
        >
          <AiFillStar
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: React.KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
          />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  const handleSpace = (i: number, e: React.KeyboardEvent<SVGElement>) => {
    if (e.code != 'Space' || !setRating) {
      return;
    }
    setRating(i);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};

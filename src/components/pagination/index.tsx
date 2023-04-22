import { FC } from 'react';

import { Button } from '../';

import s from './pagination.module.scss';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNextClick: () => void;
  onPrevClick: () => void;
}

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onNextClick,
  onPrevClick,
}) => {
  return (
    <div className={s.pagination}>
      <Button onClick={onPrevClick} disabled={currentPage <= 1}>
        Prev
      </Button>
      <div className={s.paginationPage}>{currentPage}</div>
      <Button onClick={onNextClick} disabled={currentPage >= totalPages}>
        Next
      </Button>
    </div>
  );
};

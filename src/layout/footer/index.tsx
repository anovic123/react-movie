import { FC } from 'react';
import { Link } from 'react-router-dom';

import s from './footer.module.scss';

interface FooterProps {}

export const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className={s.footer}>
      <div className={s.footerLogo}>React Movies</div>

      <div className={s.footerAuthor}>
        Developed by <Link to="https://github.com/anovic123">anovic</Link>
      </div>
    </footer>
  );
};

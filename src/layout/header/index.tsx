import { FC, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { navMenu } from '../../common/mocks/navigate';

import s from './header.module.scss';

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  const headerRef = useRef<HTMLDivElement>(null);

  const [activeLink, setActiveLink] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        headerRef.current?.classList.add(s.activeHeader);
      } else {
        headerRef.current?.classList.remove(s.activeHeader);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header ref={headerRef} className={s.header}>
      <div className={s.headerContainer}>
        <Link to="/" className={s.headerLogo}>
          React Movies
        </Link>
        <ul className={s.headerNav}>
          {navMenu.map((el) => (
            <li key={el.id}>
              <Link
                to={el.path}
                onClick={() => setActiveLink(el.id)}
                className={`${el.id === activeLink ? 'activeLink' : ''}`}
              >
                {el.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

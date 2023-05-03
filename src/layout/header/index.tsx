import { FC, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { useMediaQuery } from '../../hooks/use-media-query';

import { navMenu } from '../../common/mocks/navigate';

import s from './header.module.scss';
import { ROUTES } from '../../utils/routes';

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  const headerRef = useRef<HTMLDivElement>(null);

  const [activeLink, setActiveLink] = useState<number>(157);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const isMobile = useMediaQuery(768);

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

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header ref={headerRef} className={s.header}>
      <div className={s.headerContainer}>
        <Link to={ROUTES.HOME} className={s.headerLogo}>
          React Movies
        </Link>
        {isMobile && (
          <button
            className={`${s.burgerMenu} ${menuOpen && s.burgerMenuOpen}`}
            onClick={handleToggleMenu}
            aria-label="Burger Menu Button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
        <ul
          className={`${isMobile ? s.burgerMenuList : s.headerNav} ${
            menuOpen ? s.burgerMenuListOpen : ''
          }`}
        >
          {navMenu.map((el) => (
            <li key={el.id} className={`${isMobile ? s.burgerMenuListLi : s.headerNavLi}`}>
              <Link
                to={el.path}
                onClick={() => setActiveLink(el.id)}
                className={`${el.id === activeLink ? s.activeLink : ''}`}
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

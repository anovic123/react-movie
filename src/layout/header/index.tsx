import { FC, useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { useMediaQuery } from '../../hooks/use-media-query';

import { navMenu } from '../../common/mocks/navigate';

import { ROUTES } from '../../utils/routes';

import s from './header.module.scss';

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  const headerRef = useRef<HTMLDivElement>(null);

  const path = window.location.pathname;

  const [activeLink, setActiveLink] = useState<string>(path);

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

  useEffect(() => {
    menuOpen
      ? (window.document.body.style.overflowY = 'hidden')
      : (window.document.body.style.overflowY = 'auto');
  }, [menuOpen]);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header ref={headerRef} className={s.header}>
      <div className={s.headerContainer}>
        <Link to={ROUTES.HOME} className={s.headerLogo} onClick={() => setActiveLink('/')}>
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
              <NavLink
                to={el.path}
                onClick={() => setActiveLink(el.path)}
                className={`${el.path === activeLink ? s.activeLink : ''}`}
                style={{ color: `${isMobile && el.path === activeLink ? 'red' : ''}` }}
              >
                {el.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

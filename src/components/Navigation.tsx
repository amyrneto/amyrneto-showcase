import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';

interface NavigationProps {
  children?: React.ReactNode; // For theme switcher
}

const Navigation: React.FC<NavigationProps> = ({ children }) => {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        <ul className={styles.navList}>
          <li>
            <Link to="/" className={location.pathname === '/' ? styles.active : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === '/about' ? styles.active : ''}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className={location.pathname === '/projects' ? styles.active : ''}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/guaipeca" className={location.pathname === '/guaipeca' ? styles.active : ''}>
              Guaipeca Entertainment
            </Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === '/contact' ? styles.active : ''}>
              Contact
            </Link>
          </li>
        </ul>
        <div className={styles.navRight}>
          {children}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
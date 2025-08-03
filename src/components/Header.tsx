import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

type HeaderProps = {
  logoSrc: string;
  children?: React.ReactNode;
  height?: string;
};

const Header: React.FC<HeaderProps> = ({ logoSrc, children, height = '120px' }) => (
  <header className={styles.header} style={{ height }}>
    <div className={styles.logoContainer} style={{ maxWidth: height, marginLeft: '2rem', marginTop: '1rem' }}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <img 
          src={logoSrc} 
          alt="Amyr Showcase Logo" 
          style={{ cursor: 'pointer' }}
        />
      </Link>
    </div>
    <div className={styles.switchTheme}>
      {children}
    </div>
    <div className={styles.titleContainer}>
      <h1 className={styles.headerTitle}>Amyr Neto Showcase</h1>
    </div>
  </header>
);

export default Header;
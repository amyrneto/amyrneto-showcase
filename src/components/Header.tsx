import React from 'react';
import styles from './Header.module.css';

type HeaderProps = {
  logoSrc: string;
  children?: React.ReactNode;
  height?: string;
};

const Header: React.FC<HeaderProps> = ({ logoSrc, children, height = '120px' }) => (
  <header className={styles.header} style={{ height }}>
    <div className={styles.logoContainer} style={{ maxWidth: height, marginLeft: '2rem', marginTop: '1rem' }}>
      <img src={logoSrc} alt="Logo" className={styles.logo} />
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
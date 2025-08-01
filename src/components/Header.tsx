import React from 'react';
import styles from './Header.module.css';

type HeaderProps = {
  logoSrc: string;
  children?: React.ReactNode;
  height?: string;
};

const Header: React.FC<HeaderProps> = ({ logoSrc, children, height = '120px' }) => (
  <header className={styles.header} style={{ height }}>
    <div className={styles.logoContainer} style={{ maxWidth: height }}>
      <img src={logoSrc} alt="Logo" className={styles.logo} />
    </div>
    <div className={styles.rightContent}>
      {children}
    </div>
  </header>
);

export default Header;
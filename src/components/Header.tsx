import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import HamburgerButton from './HamburgerButton';

type HeaderProps = {
  logoSrc: string;
  children?: React.ReactNode;
  height?: string;
  onMenuToggle?: () => void; // Simplified - just toggle
  isMenuOpen?: boolean; // Add this prop
};

const Header: React.FC<HeaderProps> = ({ 
  logoSrc, 
  children, 
  height = '120px', 
  onMenuToggle,
  isMenuOpen = false // Use prop instead of local state
}) => {
  return (
    <header className={styles.header} style={{ height }}>
      <div className={styles.logoContainer}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img 
            src={logoSrc} 
            alt="Amyr Showcase Logo" 
            className={styles.logo}
          />
        </Link>
      </div>
      
      <div className={styles.titleContainer}>
        <h1 className={styles.headerTitle}>Amyr Neto Showcase</h1>
      </div>
      
      <div className={styles.headerActions}>
        <div className={styles.switchTheme}>
          {children}
        </div>
        
        <div className={styles.hamburgerContainer}>
          <HamburgerButton 
            isOpen={isMenuOpen} // Use prop from App.tsx
            onClick={onMenuToggle ?? (() => {})} // Provide default no-op if undefined
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
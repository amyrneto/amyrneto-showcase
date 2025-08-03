import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';

interface NavigationProps {
  children?: React.ReactNode; // For theme switcher
  isOpen: boolean;
  onClose: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ children, isOpen, onClose }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/guaipeca', label: 'Guaipeca Entertainment' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Overlay */}
      <div 
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}
        onClick={onClose}
      />
      
      {/* Slide-out menu */}
      <nav className={`${styles.navigation} ${isOpen ? styles.navigationOpen : ''}`}>
        <div className={styles.navHeader}>
          <h3>Navigation</h3>
          <button 
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.path} className={styles.navItem}>
              <Link 
                to={item.path} 
                className={styles.navLink}
                onClick={onClose}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.navRight}>
          {children}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
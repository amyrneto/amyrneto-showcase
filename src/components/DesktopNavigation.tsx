import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DesktopNavigation.module.css';

const DesktopNavigation: React.FC = () => {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/guaipeca', label: 'Guaipeca' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={styles.desktopNav}>
      <div className={styles.navContainer}>
        {navItems.map((item) => (
          <Link 
            key={item.path}
            to={item.path} 
            className={styles.navLink}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default DesktopNavigation;
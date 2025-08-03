import React from 'react';
import styles from './HamburgerButton.module.css';

type HamburgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ isOpen, onClick }) => (
  <button 
    className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ''}`}
    onClick={onClick}
    aria-label="Toggle menu"
  >
    <span className={styles.line}></span>
    <span className={styles.line}></span>
    <span className={styles.line}></span>
  </button>
);

export default HamburgerButton;
import React from 'react';
import styles from './ThemeSwitch.module.css';

type Props = {
    checked: boolean;
    onChange: () => void;
};

const ThemeSwitcher: React.FC<Props> = ({ checked, onChange }) => (
  <label className={styles.switch}>
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      aria-label="Toggle dark mode"
    />
    <span className={styles.slider}></span>
  </label>
);

export default ThemeSwitcher;
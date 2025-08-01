import React from 'react';
import darkSwitch from '../assets/dark-switch.png';
import lightSwitch from '../assets/light-switch.png';

type Props = {
  checked: boolean;
  onChange: () => void;
};

const ThemeImageSwitch: React.FC<Props> = ({ checked, onChange }) => (
  <button
    onClick={onChange}
    style={{
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      outline: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100px', // adjust as needed
      width: '100px', // adjust as needed
    }}
    aria-label={checked ? "Switch to light mode" : "Switch to dark mode"}
  >
    <img
      src={checked ? darkSwitch : lightSwitch}
      alt={checked ? "Dark mode" : "Light mode"}
      style={{
        height: '100%',
        width: '100%',
        objectFit: 'contain',
        transition: 'filter 0.3s',
        filter: checked ? 'drop-shadow(0 0 4px #fff)' : 'drop-shadow(0 0 4px #333)'
      }}
      draggable={false}
    />
  </button>
);

export default ThemeImageSwitch;
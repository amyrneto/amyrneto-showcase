import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Guaipeca Entertainment", path: "/guaipeca" },
  { name: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav style={{ display: 'flex', gap: '2rem', padding: '1rem', background: '#eee' }}>
      {navItems.map(item => (
        <Link
          key={item.path}
          to={item.path}
          style={{
            textDecoration: location.pathname === item.path ? 'underline' : 'none',
            fontWeight: location.pathname === item.path ? 'bold' : 'normal',
            color: '#333'
          }}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
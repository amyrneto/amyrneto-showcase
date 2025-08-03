import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import DesktopNavigation from './components/DesktopNavigation';
import Navigation from './components/Navigation';
import ThemeSwitcher from './components/ThemeSwitcher';

import homeLogo from './assets/logoHomeRoxo.png';

import HomePage from './pages/HomePage';
import About from './pages/About';
import Projects from './pages/Projects';
import Guaipeca from './pages/Guaipeca';
import Contact from './pages/Contact';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle the state
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <Router>
      <div className={`App ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
        <Header 
          logoSrc={homeLogo} 
          height="320px"
          onMenuToggle={handleMenuToggle} // Pass toggle function
          isMenuOpen={isMobileMenuOpen} // Pass current state
        >
          <ThemeSwitcher checked={theme === 'dark'} onChange={toggleTheme} />
        </Header>
        
        {/* Desktop Navigation - visible on wide screens */}
        <DesktopNavigation />
        
        {/* Mobile Navigation - slides from right on narrow screens */}
        <Navigation 
          isOpen={isMobileMenuOpen}
          onClose={closeMobileMenu}
        />

        <div style={{ padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/guaipeca" element={<Guaipeca />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

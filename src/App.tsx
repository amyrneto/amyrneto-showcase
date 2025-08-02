import React, { useEffect, useState } from 'react';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
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
  // Try to load from localStorage, otherwise default to 'dark'
  return localStorage.getItem('theme') || 'dark';
});


  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <Router>
      <div className={`App ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
        <Header logoSrc={homeLogo} height="320px">
          <ThemeSwitcher checked={theme === 'dark'} onChange={toggleTheme} />
        </Header>
        
        <Navigation>
        </Navigation>

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

import React, { useEffect, useState } from 'react';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import styles from './components/Header.module.css';
import Navbar from './components/Navbar';
import ThemeSwitcher from './components/ThemeSwitcher';

import guaipecaLogo from './assets/Guaipeca_resized_transparent.png';

import HomePage from './pages/HomePage';
import About from './pages/About';
import Projects from './pages/Projects';
import Guaipeca from './pages/Guaipeca';
import Contact from './pages/Contact';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');


  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <Router>
      <Header logoSrc={guaipecaLogo} height="240px">
        <h1 className={styles.headerTitle}>Amyr Neto Showcase</h1>
        <ThemeSwitcher checked={theme === 'dark'} onChange={toggleTheme} />
      </Header>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/guaipeca" element={<Guaipeca />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

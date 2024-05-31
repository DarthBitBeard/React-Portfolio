import React from 'react';
import Navigation from './Navigation';
import '../assets/styles/Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Landon Beard's Portfolio</h1>
      <Navigation />
    </header>
  );
}

export default Header;

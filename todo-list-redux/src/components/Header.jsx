import React from 'react';
import './Header.css';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="header">
      <h1>Todo List</h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;

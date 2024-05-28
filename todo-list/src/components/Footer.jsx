import React from 'react';
import './Footer.css';

const Footer = () => {
  const data = new Date();
  return (
    <footer className="footer">
      <p>&copy; {data.getFullYear()} Todo List. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

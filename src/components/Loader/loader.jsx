import React from 'react';
import './loader.css';

const Loader = ({ size = 'medium', color = '#007bff' }) => {
  return (
    <div className={`loader ${size}`} style={{ borderColor: color, borderTopColor: 'transparent' }}></div>
  );
};

export default Loader;

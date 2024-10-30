import React from 'react';
import './text.css';

const Text = ({ children, size = '1rem', color = 'black', weight = 'normal', align = 'left' }) => {
  return (
    <p className="text" style={{ fontSize: size, color: color, fontWeight: weight, textAlign: align }}>
      {children}
    </p>
  );
};

export default Text;

import React, { useState } from 'react';
import './TestComponent.css'; // Importa la hoja de estilos

const TestComponent = ({ children }) => {
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const toggleMobileMode = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className={`test-container ${isMobile ? 'mobile-mode' : ''}`}>
      <h2>Test Component</h2>
      <button className="toggle-button" onClick={toggleVisibility}>
        {visible ? 'Hide' : 'Show'} Child Components
      </button>
      <button className="mobile-toggle-button" onClick={toggleMobileMode}>
        Switch to {isMobile ? 'Desktop' : 'Mobile'} Mode
      </button>
      {visible && (
        <div className="child-components">
          {children ? children : <p>No components to display</p>}
        </div>
      )}
    </div>
  );
};

export default TestComponent;

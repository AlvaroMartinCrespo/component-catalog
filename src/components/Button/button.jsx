import React from 'react';
import './button.css'; // Importa la hoja de estilos

const CustomButton = ({ 
  label = "Click Me", 
  variant = "primary", 
  size = "medium", 
  onClick 
}) => {
  return (
    <button 
      className={`custom-button ${variant} ${size}`} 
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CustomButton;

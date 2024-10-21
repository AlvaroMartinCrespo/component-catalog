import React from 'react';
import './container.css'; // Importa la hoja de estilos

const Container = ({ children }) => {
  return <div className="responsive-container">{children}</div>;
};

export default Container;

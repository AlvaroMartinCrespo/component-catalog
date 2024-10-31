import React, { useEffect, useState } from 'react';
import './Toast.css'; // Importa la hoja de estilos

const Toast = ({ message, type = 'success', duration = 3000, onClose, position='top-right' }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Ocultar la toast después de la duración especificada
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) {
        onClose(); // Llamar a la función onClose si se proporciona
      }
    }, duration);

    // Limpiar el temporizador cuando se desmonta el componente
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  // Si la toast no es visible, no se renderiza
  if (!isVisible) return null;

  return (
    <div className={`toast-container ${type} ${position}`}>
      <p>{message}</p>
    </div>
  );
};

export default Toast;

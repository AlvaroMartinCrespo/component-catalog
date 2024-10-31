// Image.jsx
import React from 'react';
import './image.css';

export default function Image({ 
  src, 
  alt = 'Image', 
  width = '100%', 
  height = 'auto', 
  borderRadius = '8px', 
  objectFit = 'cover' 
}) {
  return (
    <img 
      src={src} 
      alt={alt} 
      className="custom-image" 
      style={{ width, height, borderRadius, objectFit }}
    />
  );
}

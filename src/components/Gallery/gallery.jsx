// Gallery.jsx
import React from 'react';
import './Gallery.css';

export default function Gallery({ images = [] }) {
  return (
    <section className="gallery">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Gallery Image ${index + 1}`} />
      ))}
    </section>
  );
}

import React from 'react';
import './card.css';

function Card({ image, title, description, actions }) {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        {actions && <div className="card-actions">{actions}</div>}
      </div>
    </div>
  );
}

export default Card;

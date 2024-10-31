// Accordion.jsx
import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({ title, children, isOpen = false, color = "#333" }) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  const toggleAccordion = () => setIsExpanded(!isExpanded);

  return (
    <div className="accordion" style={{ borderColor: color }}>
      <div className="accordion-header" style={{ color }} onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span className={`icon ${isExpanded ? 'rotate' : ''}`} style={{ color }}>
          ▼
        </span>
      </div>
      {isExpanded && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;

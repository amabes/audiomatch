import React from 'react';
import './flipCard.css';

const FlipCard = ({
  icon,
  show,
  className = 'col-sm-6',
  backClassName = 'bg-success'
}) => {
  return (
    <div className={className}>
      <div className={`flip-card ${show ? 'show-icon' : ''}`}>
        <div className="flip-card-inner">
          <div className="flip-card-front" />
          <div className={`flip-card-back ${backClassName}`}>
            <i className={icon} style={{ fontSize: '2rem' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;

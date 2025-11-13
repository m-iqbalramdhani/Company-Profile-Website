import React from 'react';

const ServiceCard = ({ title, image, onClick }) => {
  return (
    <div 
      className="service-card"
      onClick={onClick}
    >
      <div 
        className="service-bg" 
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="service-info">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default ServiceCard;
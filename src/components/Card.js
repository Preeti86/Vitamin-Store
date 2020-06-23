import React from 'react';
import juice from './juice.jpg';
import './Card.css';

const Card = () => (
  <div className="card">
    <img src={juice} alt="j§uice" className="card-image" />
    <div className="container">
      <h3>Vitamin Juice <span className="price">$24.99</span></h3>
      <p>Need a jum on your vitamins while drinking? Tired of popping pills? 
      Drink our vitamin enhanced juice, available in several flavours.</p>
    </div>
  </div>
);

export default Card;
import React from 'react';
import './GameCard.scss';

interface GameCardProps {
  title: string;
  image: string;
  link: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, image, link }) => {
  return (
    <a href={link} className='card'>
      <div
        className='card-image'
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className='card-content'>
        <h2>{title}</h2>
      </div>
    </a>
  );
};

export default GameCard;

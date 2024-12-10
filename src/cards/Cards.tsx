import React from 'react';
import GameCard from './GameCard';
import './Cards.scss'

const games = [
  {
    title: 'EA FC 25',
    image: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000074799/ab3989c5c208683e007deb3327a1ce70a8fa6cb38b06cfb8c2c80d563b19cfc7',
    link: '/ea-fc-25',
  },
  {
    title: 'Mortal Kombat 1',
    image: 'https://img.odcdn.com.br/wp-content/uploads/2023/08/Mortal-Kombat.png',
    link: '/mortal-kombat',
  },
  {
    title: 'Street Fighter 6',
    image: 'https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2024/09/26/street-fighter-6-luke-capa-1iv6m718gy9m8.jpg',
    link: '/street-fighter',
  },
  {
    title: 'Dragon Ball Sparking Zero',
    image: 'https://image.api.playstation.com/vulcan/ap/rnd/202405/2216/cbb03393f0ab1149f2b89a8194ce19e596a24fa5bec6526a.png',
    link: '/dbz-sparking-zero',
  },
];


const Cards = () => {
    return (
        <div className='cards'>
          <h1 className='cards-title'>Tournaments</h1>
          <div className='cards-container'>
            {games.map((game) => (
              <GameCard key={game.title} {...game} />
            ))}
          </div>
        </div>
      );
};

export default Cards;
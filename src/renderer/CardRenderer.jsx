import React from 'react'
import CardComponent from '../components/CardComponent'
import TravelCard from '../extra/TravelCard';
// import { cardInfo } from '../importer/barterImporter'

const CardRenderer = ({cardInfo}) => {
  // console.log();
    const cards = Array.isArray(cardInfo) ? cardInfo : [];
    
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5 justify-center bg-gradient-to-b from-gray-800 via-gray-600 to-gray-400">
      {cards.map((card, idx) => (
        <div key={idx} className="flex flex-col  justify-center py-2">
          {/* Remove semicolon and render name properly */}
          {/* {card?.name && <p>{card.name}</p>} */}
          {/* <CardComponent card={card} /> */}
          <TravelCard cardInfo={card}></TravelCard>
        </div>
      ))}
    </div>
  );
}

export default CardRenderer
import React from "react";

function Card({ card, playRound }) {
  return (
    <div className="card-div"
        onClick={playRound}
        key={card}
        id={card}
    >
      <img
        src={`./img/${card}.png`}
        alt={card}
        className="card-image"
      />
    </div>
  );
}

export default Card;

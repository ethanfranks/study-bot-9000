import React, { useState } from "react";
import "./FlashCard.css";
import FlashCardSide from "./FlashCardSide/FlashCardSide";

const FlashCard = ({ flashCard }) => {
  const [flipped, setFlipped] = useState(false);

  function handleFlip() {
    setFlipped((flipped) => !flipped);
  }

  return (
    <div aria-label="flash card" className="Container">
      {!flipped ? (
        <FlashCardSide text={flashCard.frontSide} />
      ) : (
        <FlashCardSide front={false} text={flashCard.backSide} />
      )}
      <div className="Spacer" />
      <div className="ButtonContainer">
        <button aria-label="flip card" className="Button" onClick={handleFlip}>
          Flip Card
        </button>
      </div>
    </div>
  );
};

export default FlashCard;

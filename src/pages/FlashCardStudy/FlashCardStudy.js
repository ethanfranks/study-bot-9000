import "./FlashCardStudy.css";
import FlashCard from "../../components/FlashCard/FlashCard";
import deck from "../../decks/httpRequestHeaders.json";
import { useEffect, useState } from "react";

function FlashCardStudy() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    console.log(currentIndex);
  }, [currentIndex]);

  function handleNext() {
    if (currentIndex < deck.flashCards.length - 1) {
      setFlipped(false);
      setCurrentIndex((currentIndex) => currentIndex + 1);
    }
  }

  function handlePrevious() {
    if (currentIndex >= 0) {
      setFlipped(false);
      setCurrentIndex((currentIndex) => currentIndex - 1);
    }
  }

  function handleFlip() {
    setFlipped((flipped) => !flipped);
  }

  return (
    <div className="Page">
      <h1>{deck.deckTitle}</h1>
      <div className="Spacer" />
      <FlashCard
        flashCard={deck.flashCards[currentIndex]}
        flipped={flipped}
        handleFlip={handleFlip}
      />
      <div className="Spacer" />
      <div className="BottomContainer">
        <p className="CardNumber">{`${currentIndex + 1} of ${
          deck.flashCards.length
        }`}</p>
        <button aria-label="next card" onClick={handlePrevious}>
          Previous
        </button>
        <button aria-label="next card" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default FlashCardStudy;

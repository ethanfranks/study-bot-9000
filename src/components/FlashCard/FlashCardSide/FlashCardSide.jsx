import React from "react";
import "./FlashCardSide.css";

const FlashCardSide = ({ front = true, text }) => {
  return (
    <div aria-label={front ? "front side" : "back side"} className="Side">
      <h2 className="Header">{front ? "Front" : "Back"}</h2>
      <div className="HeaderUnderline" />
      <div className="TextContainer">
        <p className="Text">{text}</p>
      </div>
    </div>
  );
};

export default FlashCardSide;

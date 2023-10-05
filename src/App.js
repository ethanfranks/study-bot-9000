import "./App.css";
import FlashCard from "./components/FlashCard/FlashCard";
import deck from "./decks/httpRequestHeaders.json";

function App() {
  return (
    <div className="App">
      <h1>{deck.deckTitle}</h1>
      <div className="Spacer" />
      <FlashCard flashCard={deck.flashCards[0]} />
    </div>
  );
}

export default App;

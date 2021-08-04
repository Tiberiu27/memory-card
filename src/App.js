import './App.css';
import uniqid from 'uniqid'
import Card from './components/Card';
import Navigation from './components/Navigation';
import { useEffect, useState } from 'react';
import GameOver from './components/GameOver';

function App() {
  const initalCards = [
    {title: "Quattro Stagioni", imgSource: "quattroStagioni", id: uniqid()},
    {title: "Quattro Formagi", imgSource: "quattroFormagi", id: uniqid()},
    {title: "Fish Pizza", imgSource: "fishPizza", id: uniqid()},
    {title: "Pepperoni Pizza", imgSource: "pepperoniPizza", id: uniqid()},
    {title: "Italian Pizza", imgSource: "italianPizza", id: uniqid()},
    {title: "Low Res Pizza", imgSource: "lowResPizza", id: uniqid()},
    {title: "Toxic Pizza", imgSource: "toxicPizza", id: uniqid()},
    {title: "Onion Pizza", imgSource: "onionPizza", id: uniqid()},
  ]
  const [cards, setCards] = useState(initalCards);

  const [cardsClicked, setCardsClicked] = useState([]);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [bestScoreList, setBestScoreList] = useState([]);

  useEffect(() => {
    if(score === 8) {
      gameOver();
    }
  }, [score]);

  const cardClicked = (card) => {
    if(cardsClicked.includes(card)) {
      gameOver();
      return;
    }

    setCardsClicked([...cardsClicked].concat(card))
    setScore(score + 1);

    setCards(
      [...cards].sort((a,b) => 0.5 - Math.random())
    )
  };

  const newGame = () => {
    setIsGameOver(false);
    setCards(initalCards);
    setCardsClicked([]);
    setScore(0);
  };

  const gameOver = () => {
    setCards([]);
    setIsGameOver(true);

    if(Math.max(...bestScoreList) > score) {
      return;
    } else {
      setBestScoreList([...bestScoreList].concat(score));
    }
  };

  return (
    <div className="App">
      <Navigation score={score} bestScoreList={bestScoreList}/>
      {isGameOver ? <GameOver newGame={newGame} title={score < 8 ? 'Game Over' : 'Congrats!'}/> : null}
      <div id="mainContainer">
          {
            cards.map(card =>  <Card key={card.id} title={card.title} imgSource={card.imgSource} cardClicked={cardClicked}/>)
          }
      </div>
    </div>
  );
}

export default App;

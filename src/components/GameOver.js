import '../styles/GameOver.css';

const GameOver = (props) => {
    const newGame = props.newGame;

    return (
        <div id="game-over">
            <h1 id="game-over-title">{props.title}</h1>
            <button id="new-game" onClick={newGame}>New Game</button>
        </div>
    )
}

export default GameOver;


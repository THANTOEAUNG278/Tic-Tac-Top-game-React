import Square from "./Square";
import { useState } from "react";
import calculateWinner from "./calculateWinner";
import ResetButton from "./ResetBtn";
import PlayerInputs from "./PlayerInput";


const Board = () =>{
  const [xIsnet,setXIsnext] = useState(true)
  const [history,setHistory] = useState(Array(9).fill(null));
  const [playerX, setPlayerX] = useState("");
  const [playerO, setPlayerO] = useState("");
  const winner = calculateWinner(history)

  const handlePlay = (i) =>{
    if ( !playerX || !playerO) {
      alert("Please Input Player Name!!")
      return;
    }
    if (history[i] || winner){
      return;
    }
    const nextSquare = history.slice();
    if (xIsnet) {
      nextSquare[i] = 'x';
    } else {
      nextSquare[i] = 'o'
    }
    setHistory(nextSquare);
    setXIsnext(!xIsnet)
  }

  return (
    <div>
          <div>
      <ResetButton setHistory={setHistory} />
    <div className="squaress">
    <div>
      <Square value={history[0]} onClick={() => handlePlay(0)} />
      <Square value={history[1]} onClick={() => handlePlay(1)} />
      <Square value={history[2]} onClick={() => handlePlay(2)} />
    </div>
    
    <div>
      <Square value={history[3]} onClick={() => handlePlay(3)} />
      <Square value={history[4]} onClick={() => handlePlay(4)} />
      <Square value={history[5]} onClick={() => handlePlay(5)} />
    </div>

    <div>
      <Square value={history[6]} onClick={() => handlePlay(6)} />
      <Square value={history[7]} onClick={() => handlePlay(7)} />
      <Square value={history[8]} onClick={() => handlePlay(8)} />
    </div>
  </div>
  <p>{winner && `winner is : ${winner === 'x' ? playerX :playerO} `}</p>
    </div>
    <PlayerInputs playerX={playerX} playerO={playerO}
     setPlayerX={setPlayerX} setPlayerO={setPlayerO}
      />
      
    </div>
  )
}


export default Board;


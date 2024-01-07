import React from "react";

const PlayerInputs = ({ playerX, playerO, setPlayerX, setPlayerO }) => {
  const handlePlayerNameChange = (player, e) => {
    if (player === 'X') {
      setPlayerX(e.target.value);
    } else {
      setPlayerO(e.target.value);
    }
  }

  return (
    <div>
      <div>
        Player X:
        <input type="text" value={playerX} onChange={(e) => handlePlayerNameChange('X', e)}
        />
  
      </div>
      <div>
        Player O:
        <input type="text" value={playerO} onChange={(e) => handlePlayerNameChange('O', e)}
        />
      </div>
    </div>
  );
};

export default PlayerInputs;

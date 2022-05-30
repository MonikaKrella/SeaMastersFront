import { useState } from 'react';

import MainButton from '../../atoms/MainButton/MainButton';
import PlayerPanel from '../../organisms/Board/PlayerPanel/PlayerPanel';
import { GameWrapper, PanelWrapper } from './GameStyled';
import { Iplayer } from '../../../types/Iplayer.interface';
import { startGame } from '../../../tools/fetch/fetch.functions';

function Game() {
  const [player1, setPlayer1] = useState<Iplayer | null>(null);
  const [player2, setPlayer2] = useState<Iplayer | null>(null);

  const startGameOnClick = async () => {
    try {
      const response = await startGame('Matylda', 'Bodzio');
      if (response.ok) {
        const players = await response.json();
        setPlayer1(players[0]);
        setPlayer2(players[1]);
      }
    } catch (error) {}
  };
  return (
    <GameWrapper>
      <PanelWrapper>
        <PlayerPanel player={player1} />
        <PlayerPanel player={player2} />
      </PanelWrapper>
      <MainButton btnText="Play the game" handleOnClick={startGameOnClick} />
    </GameWrapper>
  );
}

export default Game;

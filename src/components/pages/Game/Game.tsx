import { useState } from 'react';

import MainButton from '../../atoms/MainButton/MainButton';
import PlayerPanel from '../../organisms/PlayerPanel/PlayerPanel';
import { BoardsWrapper, GameWrapper, UserPanelWrapper } from './GameStyled';
import { Iplayer } from '../../../types/Iplayer.interface';
import { getPlayers, makeOneTurn } from '../../../tools/fetch/fetch.functions';
import { IRaport } from '../../../types/IRaport.interface';

function Game() {
  const [player1, setPlayer1] = useState<Iplayer | null>(null);
  const [player2, setPlayer2] = useState<Iplayer | null>(null);
  const [raport, setRaport] = useState<IRaport | null>(null);
  console.log(player1);
  console.log(player2);

  const prepareGame = async () => {
    try {
      const response = await getPlayers('Matylda', 'Bodzio');
      if (response.ok) {
        const players = await response.json();
        console.log(players);
        setPlayer1(players[0]);
        setPlayer2(players[1]);
      }
    } catch (error: any) {
      alert(error);
    }
  };

  const autoSymulation = async () => {
    try {
      // const response = await getPlayers('Matylda', 'Bodzio');
      // if (response.ok) {
      //   const players = await response.json();
      //   setPlayer1(players[0]);
      //   setPlayer2(players[1]);
      // }
    } catch (error: any) {
      alert(error);
    }
  };

  const oneMove = async () => {
    try {
      const raports = await makeOneTurn();
      if (!raport) {
        alert('Ooops, coś poszło nie tak');
      } else {
      }
    } catch (error: any) {
      alert(error);
    }
  };
  return (
    <GameWrapper>
      <BoardsWrapper>
        <PlayerPanel player={player1} raport={raport} />
        <PlayerPanel player={player2} raport={raport} />
      </BoardsWrapper>
      <UserPanelWrapper>
        <MainButton btnText="Prepare game" handleOnClick={prepareGame} />
        <MainButton
          btnText="Start auto symulation"
          handleOnClick={autoSymulation}
        />
        <MainButton btnText="One move" handleOnClick={oneMove} />
      </UserPanelWrapper>
    </GameWrapper>
  );
}

export default Game;

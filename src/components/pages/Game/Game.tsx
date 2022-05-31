import { useEffect, useState } from 'react';

import MainButton from '../../atoms/MainButton/MainButton';
import PlayerPanel from '../../organisms/PlayerPanel/PlayerPanel';
import { BoardsWrapper, GameWrapper, UserPanelWrapper } from './GameStyled';
import { IRaport } from '../../../types/interfaces/IRaport.interface';
import { Iplayer } from '../../../types/interfaces/Iplayer.interface';
import { getPlayers, makeOneTurn } from '../../../tools/fetch/fetch.functions';
import { getRandomMoveMock } from '../../../mock/oneMoveMock';
import { prepareGameMock } from '../../../mock/prepareGameMock';

function Game() {
  const [player1, setPlayer1] = useState<Iplayer | null>(null);
  const [player2, setPlayer2] = useState<Iplayer | null>(null);
  const [raport, setRaport] = useState<IRaport | null>(null);
  const [raports, setRaports] = useState<IRaport[] | null>(null);
  const [runAuto, setRunAuto] = useState(false);

  useEffect(() => {
    if (runAuto) {
      const interval = setInterval(() => {
        oneMove();
      }, 1500);

      return () => {
        clearInterval(interval);
      };
    }
  }, [runAuto]);

  useEffect(() => {
    if (raports) {
      console.log(raports);
      if (raports.length === 1) {
        setRaport(raports[0]);
      } else {
        let i = 0;
        const interval = setInterval(() => {
          setRaport(raports[i]);
          i++;
          if (i > raports.length - 1) {
            clearInterval(interval);
          }
        }, 300);
        return () => {
          clearInterval(interval);
        };
      }
    }
  }, [raports]);

  const prepareGame = async () => {
    const players = prepareGameMock();
    setPlayer1(players[0]);
    setPlayer2(players[1]);
    // try {
    //   const response = await getPlayers('Matylda', 'Bodzio');
    //   if (response.ok) {
    //     const players = await response.json();
    //     setPlayer1(players[0]);
    //     setPlayer2(players[1]);
    //   }
    // } catch (error: any) {
    //   alert(error);
    // }
  };

  const autoSymulation = () => {
    setRunAuto(true);
  };

  const oneMove = async () => {
    const gettedRaports = getRandomMoveMock();
    setRaports(gettedRaports);
    // try {
    //   const gettedRaports = await makeOneTurn();
    //   console.log(gettedRaports);
    //   if (!gettedRaports) {
    //     alert('Ooops, something went wrong');
    //   } else {
    //     setRaports(gettedRaports);
    //   }
    // } catch (error: any) {
    //   alert(error);
    // }
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
          btnText="Start auto simulation"
          handleOnClick={autoSymulation}
        />
        <MainButton btnText="One move" handleOnClick={oneMove} />
      </UserPanelWrapper>
    </GameWrapper>
  );
}

export default Game;

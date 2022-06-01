import { useEffect, useState } from 'react';

import GameLegend from '../../organisms/GameLegend/GameLegend';
import MainButton from '../../atoms/MainButton/MainButton';
import PlayerPanel from '../../organisms/PlayerPanel/PlayerPanel';
import { BoardsWrapper, GameWrapper, UserPanelWrapper } from './GameStyled';
import { IRaport } from '../../../types/interfaces/IRaport.interface';
import { Iplayer } from '../../../types/interfaces/Iplayer.interface';
import { getPlayers, makeOneTurn } from '../../../tools/fetch/fetch.functions';

function Game() {
  const [player1, setPlayer1] = useState<Iplayer | null>(null);
  const [player2, setPlayer2] = useState<Iplayer | null>(null);
  const [raport, setRaport] = useState<IRaport | null>(null);
  const [raports, setRaports] = useState<IRaport[] | null>(null);
  const [runAuto, setRunAuto] = useState(false);
  const [toStopAuto, setStopAuto] = useState(false);

  useEffect(() => {
    if (runAuto) {
      const interval = setInterval(() => {
        oneMove();
      }, 800);
      if (toStopAuto) {
        clearInterval(interval);
      }

      return () => {
        clearInterval(interval);
      };
    }
  }, [runAuto]);

  useEffect(() => {
    if (raports) {
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
        }, 200);
        return () => {
          clearInterval(interval);
        };
      }
    }
  }, [raports]);

  const prepareGame = async () => {
    try {
      const response = await getPlayers('Jack Sparrow', 'Blackbeard');
      if (response.ok) {
        const players = await response.json();
        setPlayer1(players[0]);
        setPlayer2(players[1]);
      }
    } catch (error: any) {
      alert(error);
    }
  };

  const startAuto = () => {
    setRunAuto(true);
  };

  const stopAuto = () => {
    setStopAuto(false);
  };

  const oneMove = async () => {
    try {
      const gettedRaports = await makeOneTurn();
      if (!gettedRaports) {
        alert('Ooops, something went wrong');
      } else {
        setRaports(gettedRaports);
      }
    } catch (error: any) {
      alert(error);
    }
  };

  if (raport?.HasEnemyLost) {
    // clearInterval(interval);
    alert(raport.ActivePlayer.Name + ' won this battle!');
  }

  return (
    <GameWrapper>
      <BoardsWrapper>
        <PlayerPanel player={player1} raport={raport} />
        <PlayerPanel player={player2} raport={raport} />
      </BoardsWrapper>
      <UserPanelWrapper>
        <MainButton btnText="Prepare game" handleOnClick={prepareGame} />
        <MainButton btnText="One move" handleOnClick={oneMove} />
        <MainButton btnText="Start auto simulation" handleOnClick={startAuto} />
        <MainButton btnText="Stop auto simulation" handleOnClick={stopAuto} />
        <GameLegend />
      </UserPanelWrapper>
    </GameWrapper>
  );
}

export default Game;

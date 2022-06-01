import { useEffect, useState } from 'react';

import GameLegend from '../../organisms/GameLegend/GameLegend';
import MainButton from '../../atoms/MainButton/MainButton';
import PlayerPanel from '../../organisms/PlayerPanel/PlayerPanel';
import { BoardsWrapper, GameWrapper, UserPanelWrapper } from './GameStyled';
import { IInitialGameData } from '../../../types/interfaces/IInitialGameData.interface';
import { IRaport } from '../../../types/interfaces/IRaport.interface';
import { Iplayer } from '../../../types/interfaces/Iplayer.interface';
import { getPlayers, makeOneTurn } from '../../../tools/fetch/fetch.functions';

function Game() {
  const [id, setId] = useState<string | null>(null);
  const [player1, setPlayer1] = useState<Iplayer | null>(null);
  const [player2, setPlayer2] = useState<Iplayer | null>(null);
  const [raport, setRaport] = useState<IRaport | null>(null);
  const [raports, setRaports] = useState<IRaport[] | null>(null);
  const [runAuto, setRunAuto] = useState(false);
  const [toStopAuto, setStopAuto] = useState(false);

  useEffect(() => {
    console.log('first use eeffecy');
    if (toStopAuto) {
    } else if (runAuto) {
      const interval = setInterval(() => {
        oneMove();
        if (toStopAuto) {
          clearInterval(interval);
        }
      }, 100);

      return () => {
        clearInterval(interval);
      };
    }
  }, [runAuto]);

  useEffect(() => {
    console.log('second use eeffecy');
    if (raports) {
      if (raports.length === 1) {
        setRaport(raports[0]);
      } else {
        let i = 0;
        const interval = setInterval(() => {
          setRaport(raports[i]);
          i++;
          if (i > raports.length - 1 || toStopAuto) {
            clearInterval(interval);
          }
        }, 50);
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
        const initialGameData: IInitialGameData | null = await response.json();
        if (!initialGameData) {
          alert('Something went wrong, try again');
        } else {
          setPlayer1(initialGameData.Players[0]);
          setPlayer2(initialGameData.Players[1]);
          setId(initialGameData.Id);
        }
      }
    } catch (error: any) {
      alert(error);
    }
  };

  const startAuto = () => {
    setRunAuto(true);
    setStopAuto(false);
  };

  const stopAuto = () => {
    setRunAuto(false);
  };

  const oneMove = async () => {
    console.log('one move');
    if (id) {
      try {
        const gettedRaports = await makeOneTurn(id);
        console.log(gettedRaports);
        if (!gettedRaports) {
          alert('Ooops, something went wrong');
        } else {
          setRaports(gettedRaports);
        }
      } catch (error: any) {
        alert(error);
      }
    } else {
      alert('Prepare game to start');
    }
  };

  if (raport?.HasEnemyLost) {
    setStopAuto(true);
    setRunAuto(false);
    alert(`${raport.ActivePlayer.Name} won this battle`);
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

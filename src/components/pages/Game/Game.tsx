import { useContext, useEffect, useState } from 'react';

import MainButton from '../../atoms/MainButton/MainButton';
import PlayerPanel from '../../organisms/PlayerPanel/PlayerPanel';
import { BOARD_ACTIONS } from '../../../consts/context.consts';
import { BoardsContext } from '../../../context/BoardsContext';
import { BoardsWrapper, GameWrapper, UserPanelWrapper } from './GameStyled';
import { IRaport } from '../../../types/interfaces/IRaport.interface';
import { Iplayer } from '../../../types/interfaces/Iplayer.interface';
import { createBoardWithNumbers } from '../../../tools/boardTools/emptyBoard.creator';
import { getPlayers, makeOneTurn } from '../../../tools/fetch/fetch.functions';

function Game() {
  const [player1, setPlayer1] = useState<Iplayer | null>(null);
  const [player2, setPlayer2] = useState<Iplayer | null>(null);
  const [raport, setRaport] = useState<IRaport | null>(null);
  const [raports, setRaports] = useState<IRaport[] | null>(null);
  const [runAuto, setRunAuto] = useState(false);
  const [boardState, boardDispatch] = useContext(BoardsContext);

  useEffect(() => {
    if (runAuto) {
      const interval = setInterval(() => {
        oneMove();
      }, 1500);
      if (!runAuto) {
        clearInterval(interval);
      }

      return () => {
        clearInterval(interval);
      };
    }
  }, [runAuto]);

  useEffect(() => {
    console.log(player1?.Name);
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
        }, 300);
        return () => {
          clearInterval(interval);
        };
      }
    }
  }, [raports]);

  const prepareGame = async () => {
    try {
      const response = await getPlayers('Matylda', 'Bodzio');
      if (response.ok) {
        const players = await response.json();
        setPlayer1(players[0]);
        setPlayer2(players[1]);
        boardDispatch({
          type: BOARD_ACTIONS.SET_DATA,
          payload: {
            player1: {
              name: players[0].Name,
              shootingBoard: createBoardWithNumbers(),
            },
            player2: {
              name: players[1].Name,
              shootingBoard: createBoardWithNumbers(),
            },
          },
        });
      }
    } catch (error: any) {
      alert(error);
    }
  };

  const startAuto = () => {
    setRunAuto(true);
  };

  const stopAuto = () => {
    setRunAuto(false);
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
      </UserPanelWrapper>
    </GameWrapper>
  );
}

export default Game;

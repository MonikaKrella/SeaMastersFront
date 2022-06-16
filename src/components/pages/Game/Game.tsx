import toast from 'react-hot-toast';
import { useEffect, useRef, useState } from 'react';

import GameLegend from '../../organisms/GameLegend/GameLegend';
import MainButton from '../../atoms/MainButton/MainButton';
import PlayerPanel from '../../organisms/PlayerPanel/PlayerPanel';
import { BUTTONS, ERROR, createWhoWonText } from '../../../consts/texts';
import { BoardsWrapper, GameWrapper, UserPanelWrapper } from './GameStyled';
import { ButtonStyle } from '../../../types/enums/buttonStyles.enum';
import { IInitialGameData } from '../../../types/interfaces/IInitialGameData.interface';
import { IRaport } from '../../../types/interfaces/IRaport.interface';
import { Iplayer } from '../../../types/interfaces/Iplayer.interface';
import { choosePirates } from '../../../tools/piratesTools/piratesTools';
import { getPlayers, makeOneTurn } from '../../../tools/fetch/fetch.functions';

function Game() {
  const [id, setId] = useState<string | null>(null);
  const [player1, setPlayer1] = useState<Iplayer | null>(null);
  const [player2, setPlayer2] = useState<Iplayer | null>(null);
  const [raport, setRaport] = useState<IRaport | null>(null);
  const [raports, setRaports] = useState<IRaport[] | null>(null);
  const [runAuto, setRunAuto] = useState(false);
  const isFinished = useRef(false);

  useEffect(() => {
    if (runAuto) {
      const interval = setInterval(() => {
        oneMove();
        if (!runAuto) {
          clearInterval(interval);
        }
      }, 1000);

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
          if (!runAuto) {
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
      const choosenPirates = choosePirates();
      const response = await getPlayers(choosenPirates[0], choosenPirates[1]);
      if (response.ok) {
        const initialGameData: IInitialGameData | null = await response.json();
        if (!initialGameData) {
          alert(ERROR.unknownWithTry);
        } else {
          setPlayer1(initialGameData.Players[0]);
          setPlayer2(initialGameData.Players[1]);
          setId(initialGameData.Id);
        }
      }
    } catch (error: any) {
      toast.error(ERROR.unknown);
    }
  };

  const startAuto = () => {
    setRunAuto(true);
  };

  const stopAuto = () => {
    setRunAuto(false);
  };

  const oneMove = async () => {
    if (id) {
      try {
        const gettedData = await makeOneTurn(id);
        if (gettedData.reports) {
          setRaports(gettedData.reports);
        } else {
          setRunAuto(false);
          if (gettedData.status !== 404) {
            toast.error(ERROR.unknown);
          }
        }
      } catch (error: any) {
        setRunAuto(false);
        toast.error(ERROR.unknown);
      }
    } else {
      toast.error(ERROR.gameNotPrepaired);
    }
  };
  if (raport?.HasEnemyLost && !isFinished.current) {
    toast(createWhoWonText(raport.ActivePlayer.Name), { icon: '☠️' });
    isFinished.current = true;
  }

  const clear = () => {
    setRunAuto(false);
    setId(null);
    setPlayer1(null);
    setPlayer2(null);
    setRaport(null);
    setRaports(null);
  };
  return (
    <GameWrapper>
      <BoardsWrapper>
        <PlayerPanel player={player1} raport={raport} />
        <PlayerPanel player={player2} raport={raport} />
      </BoardsWrapper>
      <UserPanelWrapper>
        <MainButton
          bg={ButtonStyle.Primary}
          btnText={BUTTONS.prepareGame}
          handleOnClick={prepareGame}
        />
        <MainButton
          bg={ButtonStyle.Primary}
          btnText={BUTTONS.oneMove}
          handleOnClick={oneMove}
        />
        <MainButton
          bg={ButtonStyle.Primary}
          btnText={BUTTONS.startAuto}
          handleOnClick={startAuto}
        />
        <MainButton
          bg={ButtonStyle.Primary}
          btnText={BUTTONS.stopAuto}
          handleOnClick={stopAuto}
        />
        <MainButton
          bg={ButtonStyle.Secondary}
          btnText={BUTTONS.clearBoards}
          handleOnClick={clear}
        />
        <GameLegend />
      </UserPanelWrapper>
    </GameWrapper>
  );
}

export default Game;

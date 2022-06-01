import { useEffect, useState } from 'react';

import Board from '../Board/Board';
import { ICoords } from '../../../types/interfaces/ICoords.interface';
import { IRaport } from '../../../types/interfaces/IRaport.interface';
import { Iplayer } from '../../../types/interfaces/Iplayer.interface';
import { NameHeading, PlayerPanelStyled } from './PlayerPanelStyled';

type PropTypes = {
  player?: Iplayer | null;
  raport?: IRaport | null;
};

function PlayerPanel(prop: PropTypes) {
  const [shipCoords, setShipCoords] = useState<ICoords[] | null>(null);

  useEffect(() => {
    if (prop.player) {
      const coordsOfShips: ICoords[] = [];
      prop.player.Ships.forEach((ship) => {
        ship.Position.forEach((coords) => {
          coordsOfShips.push(coords);
        });
      });
      setShipCoords(coordsOfShips);
    }
  }, [prop.player]);

  let isPlayerActive = false;
  if (prop.raport) {
    if (prop.raport.ActivePlayer.Name === prop.player?.Name) {
      isPlayerActive = true;
    } else {
      isPlayerActive = false;
    }
  }

  return (
    <PlayerPanelStyled>
      <NameHeading active={isPlayerActive}>
        {prop.player?.Name || 'Pirate'}
      </NameHeading>
      <Board shipsCoords={shipCoords} />
      <Board
        shootingArea={prop.player?.PlayerShootingBoard.ShootingArea}
        boardRaport={
          isPlayerActive
            ? prop.raport?.ActivePlayer.PlayerShootingBoard.ShootingArea
            : prop.raport?.DefendingPlayerShootingBoard.ShootingArea
        }
      />
    </PlayerPanelStyled>
  );
}

export default PlayerPanel;

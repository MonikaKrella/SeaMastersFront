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
  const [player, setPlayer] = useState<Iplayer | null>(null);
  const [raport, setRaport] = useState<IRaport | null>(null);
  const [shipCoords, setShipCoords] = useState<ICoords[] | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (prop.player) {
      setPlayer(player);
      const coordsOfShips: ICoords[] = [];
      prop.player.Ships.forEach((ship) => {
        ship.Position.forEach((coords) => {
          coordsOfShips.push(coords);
        });
      });
      setShipCoords(coordsOfShips);
    }
  }, [prop.player]);

  useEffect(() => {
    if (prop.raport) {
      if (prop.raport.ActivePlayer.Name === prop.player?.Name) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
      setRaport(prop.raport);
    }
  }, [prop]);

  return (
    <PlayerPanelStyled>
      <NameHeading active={isActive}>
        {prop.player?.Name || 'Pirate'}
      </NameHeading>
      <Board shipsCoords={shipCoords} />
      <Board
        shootingArea={prop.player?.PlayerShootingBoard.ShootingArea}
        boardRaport={
          isActive
            ? prop.raport?.ActivePlayer.PlayerShootingBoard.ShootingArea
            : prop.raport?.DefendingPlayerShootingBoard.ShootingArea
        }
      />
    </PlayerPanelStyled>
  );
}

export default PlayerPanel;

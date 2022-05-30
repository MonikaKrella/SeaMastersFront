import { useEffect, useState } from 'react';

import Board from '../Board/Board';
import { ICoords } from '../../../types/ICoords.interface';
import { Iplayer } from '../../../types/Iplayer.interface';
import { NameHeading, PlayerPanelStyled } from './PlayerPanelStyled';
import { IRaport } from '../../../types/IRaport.interface';

type PropTypes = {
  player?: Iplayer | null;
  raport?: IRaport | null;
};

function PlayerPanel(prop: PropTypes) {
  const [player, setPlayer] = useState<Iplayer | null>(null);
  const [raport, setRaport] = useState<IRaport | null>(null);
  const [shipCoords, setShipCoords] = useState<ICoords[] | null>(null);
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);

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
      console.log(prop.raport);
      // if (prop.raport.ActivePlayer.Name === player?.Name) {
      //   setIsActive(true);
      // }
    }
  }, [prop.raport, prop.player]);

  return (
    <PlayerPanelStyled>
      <NameHeading active={isActive}>
        {prop.player?.Name || 'Gracz'}
      </NameHeading>
      <Board shipsCoords={shipCoords} />
      <Board shootingArea={prop.player?.PlayerShootingBoard.ShootingArea} />
    </PlayerPanelStyled>
  );
}

export default PlayerPanel;

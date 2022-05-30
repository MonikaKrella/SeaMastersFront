import Board from '../Board';
import { Iplayer } from '../../../../types/Iplayer.interface';
import { PlayerPanelStyled } from './PlayerPanelStyled';

type PropTypes = {
  player: Iplayer | null;
};

function PlayerPanel(prop: PropTypes) {
  return (
    <PlayerPanelStyled>
      <h2>{prop.player?.Name || 'Gracz'}</h2>
      <Board boardData={prop.player?.PlayerBoard} />
      <Board boardData={prop.player?.PlayerShootingBoard} />
    </PlayerPanelStyled>
  );
}

export default PlayerPanel;

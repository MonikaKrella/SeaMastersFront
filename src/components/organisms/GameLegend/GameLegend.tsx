import Square from '../../atoms/Square/Square';
import { GameLegendStyled, LegP, LegendRow } from './GameLegendStyled';
import { SquareEnum } from '../../../types/enums/square.enum';

function GameLegend() {
  return (
    <GameLegendStyled>
      <h4>Legend of fields</h4>
      <LegendRow>
        <Square bg={SquareEnum.Unknown} />
        <LegP>Unknown field</LegP>
      </LegendRow>
      <LegendRow>
        <Square bg={SquareEnum.Ship} />
        <LegP>Pirate's ship</LegP>
      </LegendRow>
      <LegendRow>
        <Square bg={SquareEnum.Hit} />
        <LegP>Hitted ship!</LegP>
      </LegendRow>
      <LegendRow>
        <Square bg={SquareEnum.Miss} />
        <LegP>Missed shot!</LegP>
      </LegendRow>
      <LegendRow>
        <Square bg={SquareEnum.Empty} />
        <LegP>Empty water</LegP>
      </LegendRow>
    </GameLegendStyled>
  );
}

export default GameLegend;

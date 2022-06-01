import Square from '../../atoms/Square/Square';
import { GameLegendStyled, LegP, LegendRow } from './GameLegendStyled';
import { LEGEND_FIELD } from '../../../consts/texts';
import { SquareEnum } from '../../../types/enums/square.enum';

function GameLegend() {
  return (
    <GameLegendStyled>
      <h4>{LEGEND_FIELD.titleOfLegend}</h4>
      <LegendRow>
        <Square bg={SquareEnum.Unknown} />
        <LegP>{LEGEND_FIELD.unknown}</LegP>
      </LegendRow>
      <LegendRow>
        <Square bg={SquareEnum.Ship} />
        <LegP>{LEGEND_FIELD.ship}</LegP>
      </LegendRow>
      <LegendRow>
        <Square bg={SquareEnum.Hit} />
        <LegP>{LEGEND_FIELD.hit}</LegP>
      </LegendRow>
      <LegendRow>
        <Square bg={SquareEnum.Miss} />
        <LegP>{LEGEND_FIELD.miss}</LegP>
      </LegendRow>
      <LegendRow>
        <Square bg={SquareEnum.Empty} />
        <LegP>{LEGEND_FIELD.water}</LegP>
      </LegendRow>
    </GameLegendStyled>
  );
}

export default GameLegend;

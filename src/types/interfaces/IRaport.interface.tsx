import { ICoords } from './ICoords.interface';
import { Iplayer } from './Iplayer.interface';
import { SquareEnum } from '../enums/square.enum';

export interface IRaport {
  ActivePlayer: Iplayer;
  AdditionalEmptyFieldsAroundDestroyedShip: any[] | null;
  HasEnemyLost: boolean;
  IsEnemyShipDestroyed: boolean;
  ShootedFieldState: SquareEnum;
  ShotCoordinates: ICoords;
}

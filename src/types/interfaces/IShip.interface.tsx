import { ICoords } from './ICoords.interface';

export interface IShip {
  Length: number;
  Position: ICoords[];
  DestroyedParts: ICoords[];
  IsDestroyed: boolean;
}

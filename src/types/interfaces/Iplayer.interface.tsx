import { IShip } from './IShip.interface';

export interface Iplayer {
  Name: string;
  HasLost: boolean;
  PlayerBoard: {};
  PlayerShootingBoard: {
    ShootingArea: number[][];
  };
  Ships: IShip[];
}

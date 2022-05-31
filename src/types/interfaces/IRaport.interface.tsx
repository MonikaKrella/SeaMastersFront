import { Iplayer } from './Iplayer.interface';

export interface IRaport {
  ActivePlayer: Iplayer;
  AdditionalEmptyFieldsAroundDestroyedShip: any[] | null;
  DefendingPlayerShootingBoard: {
    ShootingArea: number[][];
  };
  HasEnemyLost: boolean;
  IsEnemyShipDestroyed: boolean;
}

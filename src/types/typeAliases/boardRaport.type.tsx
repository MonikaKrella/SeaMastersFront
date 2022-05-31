import { IRaport } from '../interfaces/IRaport.interface';

export type BoardRaportType = Pick<
  IRaport,
  | 'AdditionalEmptyFieldsAroundDestroyedShip'
  | 'ShotCoordinates'
  | 'ShootedFieldState'
>;

export const BUTTONS = {
  prepareGame: 'Prepare game',
  oneMove: 'One move',
  startAuto: 'Start auto simulation',
  stopAuto: 'Stop auto simulation',
  clearBoards: 'Clear boards',
  gamePage: 'GAME',
  rulesPage: 'RULES',
};

export const ERROR = {
  unknown: 'Ooops, something went wrong',
  unknownWithTry: 'Ooops, something went wrong, try again',
  gameNotPrepaired: 'Prepare game to start',
};

export const LEGEND_FIELD = {
  titleOfLegend: 'Legend of fields',
  unknown: `Unknown field`,
  ship: `Pirate's ship`,
  hit: `Hitted ship!`,
  miss: `Missed shot`,
  water: `Empty water`,
};

export const LOGO_ALT = 'logo';

export const createWhoWonText = (pirateName: string) => {
  return `${pirateName} won this battle!`;
};

import { ThemeContext } from 'styled-components';
import { createContext, useReducer } from 'react';

import {
  ActionType,
  IBoardContext,
  ProviderProps,
} from '../types/contextTypes/boardContext.types';
import { boardReducer } from './BoardReducer';
import { createBoardWithNumbers } from '../tools/boardTools/emptyBoard.creator';

export const initialData: IBoardContext = {
  player1: {
    name: 'Pirate1',
    shootingBoard: createBoardWithNumbers(),
  },
  player2: {
    name: 'Pirate2',
    shootingBoard: createBoardWithNumbers(),
  },
};

export const BoardsContext = createContext<
  [IBoardContext, React.Dispatch<ActionType>] | null
>(null);

export const BoardContextProvider = ({ children }: ProviderProps) => {
  const [boardState, boardDispatch] = useReducer(boardReducer, initialData);

  return (
    <ThemeContext.Provider value={[boardState, boardDispatch]}>
      {children}
    </ThemeContext.Provider>
  );
};

import { Dispatch, Reducer, ReducerAction, ReducerState } from 'react';

export interface ActionType {
  type: string;
  payload?: IBoardContext;
}

export interface IBoardContext {
  player1: {
    name: string;
    shootingBoard: number[][];
  };
  player2: {
    name: string;
    shootingBoard: number[][];
  };
}

export interface ProviderProps {
  children: React.ReactNode;
}

// export function useReducer<R extends Reducer<any, any>>(
//   reducer: R,
//   initialState: ReducerState<R>
// ): [ReducerState<R>, Dispatch<ReducerAction<R>>];

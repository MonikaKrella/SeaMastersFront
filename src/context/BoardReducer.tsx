import { Reducer, ReducerAction } from 'react';

import {
  ActionType,
  IBoardContext,
} from '../types/contextTypes/boardContext.types';
import { BOARD_ACTIONS } from '../consts/context.consts';
import { initialData } from './BoardsContext';

export const boardReducer = (
  state: IBoardContext,
  action: ActionType
): IBoardContext => {
  switch (action.type) {
    case BOARD_ACTIONS.GET_DATA:
      return state;
    case BOARD_ACTIONS.SET_DATA:
      if (action.payload) {
        return { ...action.payload };
      }
      return state;
    case BOARD_ACTIONS.UPDATE_PART:
      if (action.payload) {
        return { ...state, ...action.payload };
      }
      return state;
    case BOARD_ACTIONS.CLEAR_DATA:
      return initialData;
    default:
      return state;
  }
};

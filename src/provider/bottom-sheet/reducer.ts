import { BottomSheetContextValue } from './const';

import BottomSheet from '@gorhom/bottom-sheet';
import { RefObject } from 'react';

export type BottomSheetAction =
  | {
      type: 'OPEN';
      payload: {
        title: string;
        description: string;
      };
    }
  | {
      type: 'CLOSE';
    }
  | {
      type: 'SET';
      payload: {
        ref: RefObject<BottomSheet | null>;
      };
    };

export function bottomSheetReducer(state: BottomSheetContextValue, action: BottomSheetAction) {
  switch (action.type) {
    case 'OPEN':
      if (!state.ref?.current) return state;
      state.ref.current.expand();
      return {
        ...state,
        title: action.payload.title,
        description: action.payload.description,
      };

    case 'CLOSE':
      if (!state.ref?.current) return state;
      state.ref.current.close();
      return {
        ...state,
      };

    case 'SET':
      return {
        ...state,
        ref: action.payload.ref,
      };

    default:
      return state;
  }
}

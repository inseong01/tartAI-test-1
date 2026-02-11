import BottomSheet from '@gorhom/bottom-sheet';
import { RefObject } from 'react';

export interface BottomSheetContextValue extends BottomSheetPayload {
  ref?: RefObject<BottomSheet | null>;
}

export interface BottomSheetPayload {
  title: string;
  description: string;
}

export interface BottomSheetSetPayload {
  ref: RefObject<BottomSheet | null>;
}

export const initBottomSheetContextValue: BottomSheetContextValue = {
  title: '',
  description: '',
  ref: undefined,
};

export interface BottomSheetDispatchContextValue {
  open: (payload: BottomSheetPayload) => void;
  close: () => void;
  set: (payload: BottomSheetSetPayload) => void;
}

export const initBottomSheetDispatchContextValue: BottomSheetDispatchContextValue = {
  open: (payload: BottomSheetPayload) => {},
  close: () => {},
  set: (payload: BottomSheetSetPayload) => {},
};

import {
  BottomSheetContextValue,
  BottomSheetDispatchContextValue,
  initBottomSheetContextValue,
  initBottomSheetDispatchContextValue,
} from './const';

import { createContext } from 'react';

export const BottomSheetContext = createContext<BottomSheetContextValue>(initBottomSheetContextValue);
export const BottomSheetDispatchContext = createContext<BottomSheetDispatchContextValue>(
  initBottomSheetDispatchContextValue,
);

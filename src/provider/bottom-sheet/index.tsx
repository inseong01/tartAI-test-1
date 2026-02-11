import { BottomSheetContextValue, BottomSheetDispatchContextValue } from './const';
import { BottomSheetContext, BottomSheetDispatchContext } from './context';

import { ReactNode } from 'react';

interface BottomSheetProviderProps {
  children: ReactNode;
  value: BottomSheetContextValue;
  dispatch: BottomSheetDispatchContextValue;
}

export function BottomSheetProvider({ children, value, dispatch }: BottomSheetProviderProps) {
  return (
    <BottomSheetContext.Provider value={value}>
      <BottomSheetDispatchContext.Provider value={dispatch}>{children}</BottomSheetDispatchContext.Provider>
    </BottomSheetContext.Provider>
  );
}

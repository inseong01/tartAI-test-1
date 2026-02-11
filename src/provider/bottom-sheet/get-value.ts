import { BottomSheetPayload, BottomSheetSetPayload, initBottomSheetContextValue } from './const';
import { bottomSheetReducer } from './reducer';

import { useReducer } from 'react';

export function useGetBottomSheetValue() {
  const [state, dispatch] = useReducer(bottomSheetReducer, initBottomSheetContextValue);

  const dispatchFn = {
    open: (payload: BottomSheetPayload) => dispatch({ type: 'OPEN', payload }),
    close: () => dispatch({ type: 'CLOSE' }),
    set: (payload: BottomSheetSetPayload) => dispatch({ type: 'SET', payload }),
  };

  return { state, dispatchFn };
}

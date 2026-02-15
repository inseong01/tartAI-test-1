import { BottomSheetDispatchContext } from '@/src/provider/bottom-sheet/context';

import { useContext, useEffect, useRef } from 'react';
import { BackHandler } from 'react-native';

export function useBottomSheetBackButtonHandler() {
  const dispatch = useContext(BottomSheetDispatchContext);

  const backHandlerRef = useRef<ReturnType<typeof BackHandler.addEventListener> | null>(null);

  const backAction = () => {
    dispatch.close();
    return true;
  };

  const handleBottomSheetState = (state: number) => {
    const isBottomSheetOpen = state > -1;
    if (isBottomSheetOpen && !backHandlerRef.current) {
      backHandlerRef.current = BackHandler.addEventListener('hardwareBackPress', backAction);
      return;
    }

    if (!isBottomSheetOpen && backHandlerRef.current) {
      backHandlerRef.current.remove();
      backHandlerRef.current = null;
    }
  };

  /**
   * 뒤로가기 이벤트 초기화
   */
  useEffect(() => {
    return () => {
      if (!backHandlerRef.current) return;

      backHandlerRef.current.remove();
      backHandlerRef.current = null;
    };
  }, []);

  return { handleBottomSheetState };
}

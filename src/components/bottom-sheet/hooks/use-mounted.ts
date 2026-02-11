import { BottomSheetDispatchContext } from '@/src/provider/bottom-sheet/context';

import BottomSheet from '@gorhom/bottom-sheet';
import { RefObject, useContext, useEffect, useState } from 'react';

export function useMounted(bottomSheetRef: RefObject<BottomSheet | null>) {
  const [mount, setMount] = useState(false);

  /**
   * 바텀 시트 렌더링 완료 전까지 글자 등장 방지 목적
   */
  useEffect(() => {
    setMount((prev) => !prev);
  }, []);

  const dispatch = useContext(BottomSheetDispatchContext);

  /**
   * 바텀 시트 Ref 등록 목적
   * - mount 의존성 부여
   */
  useEffect(() => {
    if (bottomSheetRef.current) {
      dispatch.set({ ref: bottomSheetRef });
    }
  }, [dispatch, bottomSheetRef, mount]);

  return { mount };
}

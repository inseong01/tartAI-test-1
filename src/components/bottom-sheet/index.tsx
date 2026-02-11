import { BottomSheetContext } from '@/src/provider/bottom-sheet/context';
import CustomBottomSheet from './bottom-sheet';
import { useMounted } from './hooks/use-mounted';

import BottomSheet from '@gorhom/bottom-sheet';
import { useContext, useRef } from 'react';

export default function RenderBottomSheet() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const { mount } = useMounted(bottomSheetRef);

  const state = useContext(BottomSheetContext);

  return <>{mount && <CustomBottomSheet ref={bottomSheetRef} title={state.title} description={state.description} />}</>;
}

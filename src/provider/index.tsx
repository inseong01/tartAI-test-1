import { BottomSheetProvider } from './bottom-sheet';
import { useGetBottomSheetValue } from './bottom-sheet/get-value';

import { PropsWithChildren } from 'react';

export function ProviderGroup({ children }: PropsWithChildren) {
  const bottomSheetValue = useGetBottomSheetValue();

  return (
    <BottomSheetProvider value={bottomSheetValue.state} dispatch={bottomSheetValue.dispatchFn}>
      {children}
    </BottomSheetProvider>
  );
}

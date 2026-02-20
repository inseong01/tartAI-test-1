import { BottomSheetProvider } from './bottom-sheet';
import { useGetBottomSheetValue } from './bottom-sheet/get-value';
import { ThemeProvider } from './color-theme';

import { PropsWithChildren } from 'react';

export function ProviderGroup({ children }: PropsWithChildren) {
  const bottomSheetValue = useGetBottomSheetValue();

  return (
    <ThemeProvider>
      <BottomSheetProvider value={bottomSheetValue.state} dispatch={bottomSheetValue.dispatchFn}>
        {children}
      </BottomSheetProvider>
    </ThemeProvider>
  );
}

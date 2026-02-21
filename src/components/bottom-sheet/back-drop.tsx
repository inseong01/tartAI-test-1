import { useTheme } from '@/src/provider/color-theme/use-theme';
import { BottomSheetBackdrop } from '@gorhom/bottom-sheet';

const INIT_OPACITY = 0.3;
const DISAPPEAR_INDEX = -1;
const APPEAR_INDEX = 1;

export default function RenderBackDrop(props: any) {
  const { scheme } = useTheme();

  return (
    <BottomSheetBackdrop
      {...props}
      opacity={scheme === 'light' ? INIT_OPACITY : 1}
      disappearsOnIndex={DISAPPEAR_INDEX}
      appearsOnIndex={APPEAR_INDEX}
    />
  );
}

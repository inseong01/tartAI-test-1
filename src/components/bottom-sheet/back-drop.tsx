import { BottomSheetBackdrop } from '@gorhom/bottom-sheet';

const INIT_OPACITY = 0.3;
const DISAPPEAR_INDEX = -1;
const APPEAR_INDEX = 1;

export default function RenderBackDrop(props: any) {
  return (
    <BottomSheetBackdrop
      {...props}
      opacity={INIT_OPACITY}
      disappearsOnIndex={DISAPPEAR_INDEX}
      appearsOnIndex={APPEAR_INDEX}
    />
  );
}

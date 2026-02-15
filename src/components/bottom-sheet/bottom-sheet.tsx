import ColoredText from '../ui/invest/ranking/text';
import RenderBackDrop from './back-drop';

import { useBottomSheetBackButtonHandler } from './hooks/use-back-button-handler';

import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { ReactNode, RefObject } from 'react';
import { StyleSheet } from 'react-native';

interface CustomBottomSheetProps {
  ref: RefObject<BottomSheet | null>;
  title: string;
  description: ReactNode;
}

const BOTTOM_SPACE = 30;
const INIT_STATE_OFF = -1;

export default function CustomBottomSheet({ ref, title, description }: CustomBottomSheetProps) {
  const { handleBottomSheetState } = useBottomSheetBackButtonHandler();

  return (
    <BottomSheet
      ref={ref}
      detached
      enablePanDownToClose
      index={INIT_STATE_OFF}
      backdropComponent={RenderBackDrop}
      onChange={handleBottomSheetState}
      bottomInset={BOTTOM_SPACE}
      style={styles.container}
      handleStyle={styles.handleStyle}
      handleIndicatorStyle={styles.handleIndicatorStyle}
    >
      <BottomSheetView style={styles.sheetView}>
        <ColoredText type='Zinc950' style={{ fontSize: 20, lineHeight: 28 }}>
          {title}
        </ColoredText>
        <ColoredText type='Zinc600' style={{ fontSize: 16, lineHeight: 22, fontWeight: '400' }}>
          {description}
        </ColoredText>
      </BottomSheetView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginHorizontal: 11,
  },
  sheetView: {
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 28,
  },
  handleStyle: { paddingTop: 16, paddingBottom: 0 },
  handleIndicatorStyle: { backgroundColor: '#D4D4D8' },
});

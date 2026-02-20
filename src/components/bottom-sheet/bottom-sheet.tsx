import { useTheme } from '@/src/provider/color-theme/use-theme';
import { PretendardText } from '../text/pretendard-text';
import RenderBackDrop from './back-drop';

import { useBottomSheetBackButtonHandler } from './hooks/use-back-button-handler';

import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { ReactNode, RefObject } from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface CustomBottomSheetProps {
  ref: RefObject<BottomSheet | null>;
  title: string;
  description: ReactNode;
}

const BOTTOM_SPACE = 30;
const INIT_STATE_OFF = -1;

export default function CustomBottomSheet({ ref, title, description }: CustomBottomSheetProps) {
  const { handleBottomSheetState } = useBottomSheetBackButtonHandler();
  const insets = useSafeAreaInsets();

  const { scheme } = useTheme();

  return (
    <BottomSheet
      ref={ref}
      detached
      enablePanDownToClose
      index={INIT_STATE_OFF}
      backdropComponent={RenderBackDrop}
      onChange={handleBottomSheetState}
      bottomInset={insets.bottom + BOTTOM_SPACE}
      style={[
        styles.container,
        {
          borderColor: scheme === 'light' ? '#FFFFFF' : '#3A3A3C',
        },
      ]}
      handleStyle={[
        styles.handleStyle,
        {
          backgroundColor: scheme === 'light' ? '#FFFFFF' : '#2C2C2C',
        },
      ]}
      handleIndicatorStyle={[
        styles.handleIndicatorStyle,
        { backgroundColor: scheme === 'light' ? '#D4D4D8' : '#4A4A4D' },
      ]}
    >
      <BottomSheetView
        style={[
          styles.sheetView,
          {
            backgroundColor: scheme === 'light' ? '#FFFFFF' : '#2C2C2C',
          },
        ]}
      >
        <PretendardText color='Zinc950' size={20} weight='700' style={{ lineHeight: 28 }}>
          {title}
        </PretendardText>
        <PretendardText color='Zinc600' size={16} weight='400' style={{ lineHeight: 22 }}>
          {description}
        </PretendardText>
      </BottomSheetView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginHorizontal: 11,
    overflow: 'hidden',
    borderRadius: 16,
  },
  sheetView: {
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 28,
  },
  handleStyle: {
    paddingTop: 16,
    paddingBottom: 0,
  },
  handleIndicatorStyle: {
    maxWidth: 100,
  },
});

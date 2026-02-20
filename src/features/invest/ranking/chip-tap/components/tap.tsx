import { PretendardText } from '@/src/components/text/pretendard-text';
import { useTheme } from '@/src/provider/color-theme/use-theme';

import { StyleSheet, TouchableOpacity } from 'react-native';

interface TapProps {
  text: string;
  isFocused: boolean;
  onPress: () => void;
}

export default function Tap({ text, isFocused, onPress }: TapProps) {
  const { scheme } = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.tapContainer,
        isFocused && {
          backgroundColor: scheme === 'light' ? '#F4F4F5' : '#3A3A3C',
        },
      ]}
      onPress={onPress}
      activeOpacity={1}
    >
      <PretendardText color={isFocused ? 'Zinc950' : 'Zinc400'} size={14} weight='600' lineHeight={20}>
        {text}
      </PretendardText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tapContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 12,
    backgroundColor: 'transparent',
  },
});

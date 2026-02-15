import { PretendardText } from '@/src/components/text/pretendard-text';

import { StyleSheet, TouchableOpacity } from 'react-native';

interface TapProps {
  text: string;
  isFocused: boolean;
  onPress: () => void;
}

export default function Tap({ text, isFocused, onPress }: TapProps) {
  return (
    <TouchableOpacity style={[styles.tapContainer, isFocused && styles.focusedTap]} onPress={onPress} activeOpacity={1}>
      <PretendardText color={isFocused ? 'Zinc950' : 'Zinc400'} size={14} weight='600' style={{ lineHeight: 20 }}>
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
  focusedTap: {
    backgroundColor: '#F4F4F5',
  },
});

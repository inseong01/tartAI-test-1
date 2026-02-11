import ColoredText from '@/src/components/ui/invest/ranking/text';

import { StyleSheet, TouchableOpacity } from 'react-native';

interface TapProps {
  text: string;
  isFocused: boolean;
  onPress: () => void;
}

export default function Tap({ text, isFocused, onPress }: TapProps) {
  return (
    <TouchableOpacity style={[styles.tapContainer, isFocused && styles.focusedTap]} onPress={onPress} activeOpacity={1}>
      <ColoredText type={isFocused ? 'Zinc950' : 'Zinc400'}>{text}</ColoredText>
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

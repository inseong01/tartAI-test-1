import ColoredText from '@/src/components/ui/invest/ranking/text';

import { Pressable, StyleSheet } from 'react-native';

interface TapProps {
  text: string;
  isActive: boolean;
  onPress: () => void;
}

export default function Tap({ text, isActive, onPress }: TapProps) {
  return (
    <Pressable style={styles.tapContainer} onPress={onPress}>
      <ColoredText type={isActive ? 'base' : 'sub'}>{text}</ColoredText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tapContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});

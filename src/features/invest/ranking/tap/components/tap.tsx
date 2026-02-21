import { PretendardText } from '@/src/components/text/pretendard-text';

import { Pressable, StyleSheet } from 'react-native';

interface TapProps {
  text: string;
  isActive: boolean;
  onPress: () => void;
}

export default function Tap({ text, isActive, onPress }: TapProps) {
  return (
    <Pressable style={styles.tapContainer} onPress={onPress}>
      <PretendardText
        color={isActive ? 'Zinc950' : 'Zinc400'}
        size={14}
        weight='600'
        lineHeight={20}
        style={{ textAlign: 'center' }}
      >
        {text}
      </PretendardText>
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

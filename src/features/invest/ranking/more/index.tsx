import ColoredText from '@/src/components/ui/invest/ranking/text';

import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

interface MoreButtonProps {
  value: string;
  pressButton: () => void;
}

export default function MoreButton({ value, pressButton }: MoreButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={pressButton} activeOpacity={1}>
      <ColoredText type='Zinc500' style={{ fontSize: 16, lineHeight: 22, fontWeight: '700' }}>
        {value}
      </ColoredText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F5',
    borderRadius: 12,
    /* padding */
    paddingVertical: 15,
    paddingHorizontal: 12,
  },
});

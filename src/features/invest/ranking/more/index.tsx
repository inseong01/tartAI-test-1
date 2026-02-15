import { PretendardText } from '@/src/components/text/pretendard-text';

import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

interface MoreButtonProps {
  value: string;
  pressButton: () => void;
}

export default function MoreButton({ value, pressButton }: MoreButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={pressButton} activeOpacity={1}>
      <PretendardText color='Zinc500' size={16} weight='700' style={{ lineHeight: 22 }}>
        {value}
      </PretendardText>
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

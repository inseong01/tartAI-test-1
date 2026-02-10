import ColoredText from '@/src/components/ui/invest/ranking/text';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

interface MoreButtonProps {
  isClicked: boolean;
  expandHeight: () => void;
}

export default function MoreButton({ isClicked, expandHeight }: MoreButtonProps) {
  const value = isClicked ? '접기' : '펼치기';

  return (
    <TouchableOpacity style={styles.container} onPress={expandHeight} activeOpacity={1}>
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

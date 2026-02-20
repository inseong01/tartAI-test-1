import { PretendardText } from '@/src/components/text/pretendard-text';
import { useTheme } from '@/src/provider/color-theme/use-theme';

import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

interface MoreButtonProps {
  value: string;
  pressButton: () => void;
}

export default function MoreButton({ value, pressButton }: MoreButtonProps) {
  const { scheme } = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: scheme === 'light' ? '#F4F4F5' : '#3A3A3C',
        },
      ]}
      onPress={pressButton}
      activeOpacity={1}
    >
      <PretendardText color='Zinc500' size={16} weight='700' lineHeight={22}>
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
    borderRadius: 12,
    /* padding */
    paddingVertical: 15,
    paddingHorizontal: 12,
  },
});

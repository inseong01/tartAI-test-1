import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import InvestCategoryIcon from './icon';

interface CategoryFrameProps {
  title: string;
  children: ReactNode;
}

export default function CategoryFrame({ title, children }: CategoryFrameProps) {
  return (
    <View style={styles.box}>
      <InvestCategoryIcon>{children}</InvestCategoryIcon>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 60,
    height: 84,
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  },
  text: {
    /* font */
    fontFamily: 'Pretendard',
    fontWeight: '600',
    fontSize: 14,
    /* letter */
    lineHeight: 20,
    letterSpacing: 0,
    /* text */
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

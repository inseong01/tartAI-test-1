import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

interface InvestCategoryIconProps {
  children: ReactNode;
}

export default function InvestCategoryIcon({ children }: InvestCategoryIconProps) {
  return <View style={styles.box}>{children}</View>;
}

const styles = StyleSheet.create({
  box: {
    padding: 8,
    /* shadow */
    shadowColor: '#F0F0F1',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 6,
    /* border */
    borderColor: '#F4F4F5',
    borderRadius: 6,
    /* BG */
    backgroundColor: '#fff',
  },
});

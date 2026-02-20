import { useTheme } from '@/src/provider/color-theme/use-theme';
import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

interface InvestCategoryIconProps {
  children: ReactNode;
}

export default function InvestCategoryIcon({ children }: InvestCategoryIconProps) {
  const { scheme } = useTheme();

  return (
    <View
      style={[
        styles.box,
        {
          borderColor: scheme === 'light' ? '#F4F4F5' : '#3A3A3C',
        },
        {
          shadowColor: scheme === 'light' ? '#F0F0F1' : '#1A1A1C',
        },
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 8,
    /* shadow */
    shadowColor: '#F0F0F1',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 3,
    /* border */
    borderRadius: 12,
    /* BG */
    backgroundColor: '#fff',
  },
});

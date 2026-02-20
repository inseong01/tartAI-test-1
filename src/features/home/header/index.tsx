import UserIconGroup from './user-row';

import { useTheme } from '@/src/provider/color-theme/use-theme';

import { StyleSheet, View } from 'react-native';

export default function PageHeader() {
  const { scheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: scheme === 'light' ? '#FAFAFA' : '#121212' }]}>
      <UserIconGroup />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    paddingHorizontal: 20,
  },
});

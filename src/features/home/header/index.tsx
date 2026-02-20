import UserIconGroup from './user-row';

import { StyleSheet, View } from 'react-native';

export default function PageHeader() {
  return (
    <View style={styles.container}>
      <UserIconGroup />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 20,
  },
});

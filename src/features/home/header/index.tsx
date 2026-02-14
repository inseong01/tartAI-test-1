import UserIconGroup from './user-row';

import { StyleSheet, View } from 'react-native';

export default function PageHeader() {
  return (
    <View style={styles.container}>
      {/* <MobileStatus /> */}
      <UserIconGroup />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    position: 'fixed',
    top: 0,
    zIndex: 0,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 20,
  },
});

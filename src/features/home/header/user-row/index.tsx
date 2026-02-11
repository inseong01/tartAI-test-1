import AlarmButton from './alarm';
import SettingButton from './setting';

import { StyleSheet, View } from 'react-native';

export default function UserIconGroup() {
  return (
    <View style={styles.container}>
      <View style={styles.iconGroup}>
        <SettingButton />
        <AlarmButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 14,
  },
  iconGroup: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
});

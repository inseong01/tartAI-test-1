import AlarmButton from './alarm';
import SettingButton from './setting';

import { StyleSheet, View } from 'react-native';

export default function PageHeader() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerRow}>
        <View style={styles.iconWrapper}>
          <SettingButton />
          <AlarmButton />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    paddingTop: 14,
    paddingBottom: 14,
    position: 'fixed',
    top: 0,
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: '100%',
    paddingRight: 20,
  },
  iconWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
});

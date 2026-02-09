import BellSVG from '@/src/components/icons/bell-svg';
import MoreSVG from '@/src/components/icons/more-svg';
import UserIcon from '@/src/components/ui/user-icon';
import { StyleSheet, View } from 'react-native';

export default function PageHeader() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerRow}>
        <View style={styles.iconWrapper}>
          <UserIcon>
            <MoreSVG />
          </UserIcon>
          <UserIcon>
            <BellSVG />
          </UserIcon>
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

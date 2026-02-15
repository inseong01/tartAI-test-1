import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

export default function MobileStatus() {
  return (
    <View style={styles.container}>
      <View style={styles.timeBox}>
        <Text style={styles.text}>9:41</Text>
      </View>

      <View style={styles.iconGroup}>
        <Image
          style={{ width: 18, height: 12, objectFit: 'contain' }}
          source={require('./../../../../../assets/mobile/Mobile-Signal.png')}
        />
        <Image
          style={{ width: 17, height: 12, objectFit: 'contain' }}
          source={require('./../../../../../assets/mobile/Wifi.png')}
        />
        <Image
          style={{ width: 27, height: 13, objectFit: 'contain' }}
          source={require('./../../../../../assets/mobile/StatusBar-battery.png')}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  timeBox: {
    width: 54,
    height: 21,
  },
  text: {
    fontFamily: 'SF Pro Text',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
    textAlign: 'center',
  },
  iconGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
});

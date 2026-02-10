import { StyleSheet, View } from 'react-native';

import InvestRakingList from './list';
import InvestRakingTitle from './title';

export default function InvestRaking() {
  return (
    <View style={styles.container}>
      <InvestRakingTitle />

      <InvestRakingList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 16,
  },
});

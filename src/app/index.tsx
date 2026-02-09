import { StyleSheet, Text, View } from 'react-native';
import PageHeader from '../features/home/header';

export default function Index() {
  return (
    <View style={styles.mainContainer}>
      <PageHeader />

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingTop: 56,
    backgroundColor: '#F9F9F9',
  },
});

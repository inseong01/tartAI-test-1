import RenderBottomSheet from '../components/bottom-sheet';
import PageHeader from '../features/home/header';
import InvestCategories from '../features/invest/category';
import InvestRaking from '../features/invest/ranking';
import { ProviderGroup } from '../provider';

import { ScrollView, StyleSheet, View } from 'react-native';

export default function Index() {
  return (
    <ProviderGroup>
      <View style={styles.container}>
        <PageHeader />

        <ScrollView contentContainerStyle={styles.mainContainer} showsVerticalScrollIndicator={false}>
          <InvestRaking />
          <InvestCategories />
        </ScrollView>

        <RenderBottomSheet />
      </View>
    </ProviderGroup>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: 56,
    backgroundColor: '#F9F9F9',
  },
  mainContainer: {
    gap: 32,
    paddingTop: 7,
    paddingBottom: 28,
  },
});

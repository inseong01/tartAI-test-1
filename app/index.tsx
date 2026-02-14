import RenderBottomSheet from '../src/components/bottom-sheet';
import PageHeader from '../src/features/home/header';
import InvestCategories from '../src/features/invest/category';
import InvestRaking from '../src/features/invest/ranking';

import { ProviderGroup } from '../src/provider';

import { ScrollView, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Index() {
  return (
    <ProviderGroup>
      <GestureHandlerRootView style={styles.container}>
        <PageHeader />

        <ScrollView contentContainerStyle={styles.mainContainer} showsVerticalScrollIndicator={false}>
          <InvestRaking />
          <InvestCategories />
        </ScrollView>

        <RenderBottomSheet />
      </GestureHandlerRootView>
    </ProviderGroup>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 96,
    backgroundColor: '#F9F9F9',
  },
  mainContainer: {
    gap: 32,
    paddingTop: 7,
    paddingBottom: 28,
  },
});

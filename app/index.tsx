import RenderBottomSheet from '../src/components/bottom-sheet';
import PageHeader from '../src/features/home/header';
import InvestCategories from '../src/features/invest/category';
import InvestRaking from '../src/features/invest/ranking';

import { ProviderGroup } from '../src/provider';

import AppWrapper from '@/src/components/layout';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function Index() {
  return (
    <ProviderGroup>
      <AppWrapper>
        <StatusBar translucent style='dark' />

        <View style={styles.deviceLayout}>
          <PageHeader />
        </View>

        <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.deviceLayout}>
            <View style={styles.main}>
              <InvestRaking />
              <InvestCategories />
            </View>
          </View>
        </ScrollView>

        <RenderBottomSheet />
      </AppWrapper>
    </ProviderGroup>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  scrollContent: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  deviceLayout: {
    maxWidth: 460,
  },
  main: {
    flex: 1,
    gap: 32,
    paddingTop: 7,
    paddingBottom: 28,
  },
});

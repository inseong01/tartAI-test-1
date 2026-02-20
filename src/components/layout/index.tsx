import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import useWindowWidth from './hooks/use-window-width';

type Props = {
  children: React.ReactNode;
};

export default function AppWrapper({ children }: Props) {
  const windowWidth = useWindowWidth();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <SafeAreaView
          style={[styles.container, { alignItems: windowWidth > 460 ? 'center' : 'stretch' }]}
          edges={['top', 'bottom']}
        >
          {children}
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
});

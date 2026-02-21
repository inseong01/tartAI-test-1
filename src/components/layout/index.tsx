import { useWindowWidth } from '@/src/hooks/use-window-width';
import { useTheme } from '@/src/provider/color-theme/use-theme';

import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

type Props = {
  children: React.ReactNode;
};

export default function AppWrapper({ children }: Props) {
  const windowWidth = useWindowWidth();
  const { scheme } = useTheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <SafeAreaView
          style={[
            styles.container,
            { alignItems: windowWidth > 460 ? 'center' : 'stretch' },
            { backgroundColor: scheme === 'light' ? '#F9F9F9' : '#121212' },
          ]}
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
  },
});

import { useTheme } from '@/src/provider/color-theme/use-theme';
import { CategoryTapType } from '../constants/types';

import Tap from './components/tap';
import { useTabAnimate } from './hooks/use-tab-animate';
import { useTabIndicatorAnimate } from './hooks/use-tab-indicator-animate';

import { StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';

interface CategoryTapProps {
  selectedTap: CategoryTapType;
  setCategoryTap: (type: CategoryTapType) => void;
}

export default function CategoryTap({ selectedTap, setCategoryTap }: CategoryTapProps) {
  const { translateX, tabWidth, handleLayout } = useTabIndicatorAnimate();
  const { handlePress } = useTabAnimate({ tabWidth, translateX, setCategoryTap });

  const { scheme } = useTheme();

  return (
    <View style={styles.container} onLayout={handleLayout}>
      <Tap text='연 수익률 순' isActive={selectedTap === 'ratio'} onPress={() => handlePress('ratio')} />
      <Tap text='빠른 매각 순' isActive={selectedTap === 'tradeTerm'} onPress={() => handlePress('tradeTerm')} />

      <Animated.View
        style={[
          styles.indicator,
          {
            width: tabWidth,
            transform: [{ translateX }],
          },
          {
            backgroundColor: scheme === 'light' ? '#09090B' : '#F5F5F5',
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'relative',
  },
  indicator: {
    width: '50%',
    position: 'absolute',
    bottom: 0,
    height: 2,
    backgroundColor: '#09090B',
  },
});

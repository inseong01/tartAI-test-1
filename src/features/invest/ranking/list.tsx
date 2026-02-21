import ChipTap from './chip-tap';
import Card from './components/card';
import MoreButton from './more';
import CategoryTap from './tap';

import { useButtonPress } from './hooks/use-button-press';
import { useExpandAnimate } from './hooks/use-expand-animate';
import { useInvestmentData } from './hooks/use-investment-data';
import { useMagageTap } from './hooks/use-manage-tab';

import { INIT_GROUP_HEIGHT } from './constants/const';

import INVESTMENT_DATA from '@/src/mock/investment-data.json';

import { useTheme } from '@/src/provider/color-theme/use-theme';

import { StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';

export default function InvestRakingList() {
  const { categoryTap, chipTap, setCategoryTap, setChipTap } = useMagageTap();
  const { data } = useInvestmentData(categoryTap, chipTap, INVESTMENT_DATA);

  const { isPressed, pressButton } = useButtonPress();
  const { animatedTapStyle } = useExpandAnimate(isPressed);

  const { scheme } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: scheme === 'light' ? '#fff' : '#2c2c2c' },
        { borderColor: scheme === 'light' ? '#F4F4F5' : '#2D2D2F' },
        { shadowColor: scheme === 'light' ? '#F0F0F1' : '#1A1A1C' },
      ]}
    >
      <CategoryTap selectedTap={categoryTap} setCategoryTap={setCategoryTap} />

      <ChipTap categoryTap={categoryTap} chipTap={chipTap} setChipTap={setChipTap} />

      <Animated.View style={[styles.animateGroup, animatedTapStyle]}>
        {data.map((data, i) => (
          <Card key={data.id} idx={i + 1} category={categoryTap} {...data} />
        ))}
      </Animated.View>

      <MoreButton value={isPressed ? '접기' : '펼치기'} pressButton={pressButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    display: 'flex',
    gap: 16,
    /* border */
    borderWidth: 1,
    borderRadius: 16,
    /* shadow */
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 3,
  },
  animateGroup: {
    overflow: 'hidden',
    height: INIT_GROUP_HEIGHT,
    gap: 16,
  },
});

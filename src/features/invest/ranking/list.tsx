import ChipTap from './chip-tap';
import Card from './components/card';
import MoreButton from './more';
import CategoryTap from './tap';

import { useMoreButtonPress } from './hooks/use-button-press';
import { useInvestmentData } from './hooks/use-investment-data';
import { useMagageTap } from './hooks/use-manage-tab';

import { INIT_GROUP_HEIGHT } from './constants/const';

import INVESTMENT_DATA from '@/src/mock/investment-data.json';

import { StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';

export default function InvestRakingList() {
  const { categoryTap, chipTap, setCategoryTap, setChipTap } = useMagageTap();
  const { data } = useInvestmentData(categoryTap, chipTap, INVESTMENT_DATA);
  const { buttonValue, animatedRef, tabHeight, pressButton } = useMoreButtonPress();

  return (
    <View style={styles.container}>
      <CategoryTap selectedTap={categoryTap} setCategoryTap={setCategoryTap} />

      <ChipTap categoryTap={categoryTap} chipTap={chipTap} setChipTap={setChipTap} />

      <Animated.View
        ref={animatedRef}
        style={[
          styles.cardGroup,
          {
            height: tabHeight,
          },
        ]}
      >
        {data.map((data, i) => (
          <Card key={data.id} idx={i + 1} category={categoryTap} {...data} />
        ))}
      </Animated.View>

      <MoreButton value={buttonValue} pressButton={pressButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    display: 'flex',
    gap: 16,
    /* border */
    borderWidth: 1,
    borderColor: '#F4F4F5',
    borderRadius: 16,
    /* shadow */
    shadowColor: '#F0F0F1',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 3,
  },
  cardGroup: {
    gap: 16,
    overflow: 'hidden',
    height: INIT_GROUP_HEIGHT,
  },
});

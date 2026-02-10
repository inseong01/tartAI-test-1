import Tap from './components/tap';

import { Dispatch, SetStateAction } from 'react';
import { StyleSheet, View } from 'react-native';

interface ChipTapProps {
  chipTap: string;
  setChipTap: Dispatch<SetStateAction<string>>;
}

export default function TradeTermChipTap({ chipTap, setChipTap }: ChipTapProps) {
  const onPressTap = (tab: string) => {
    setChipTap(tab);
  };

  return (
    <View style={styles.container}>
      <Tap isFocused={chipTap === 'recent'} text='가장 빠른' onPress={() => onPressTap('recent')} />
      <Tap isFocused={chipTap === 'sixMonth'} text='6개월 걸린' onPress={() => onPressTap('sixMonth')} />
      <Tap isFocused={chipTap === 'year'} text='1년 걸린' onPress={() => onPressTap('year')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
  },
});

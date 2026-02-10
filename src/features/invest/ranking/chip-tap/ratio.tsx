import Tap from './components/tap';

import { Dispatch, SetStateAction } from 'react';
import { StyleSheet, View } from 'react-native';

interface ChipTapProps {
  chipTap: string;
  setChipTap: Dispatch<SetStateAction<string>>;
}

export default function RatioChipTap({ chipTap, setChipTap }: ChipTapProps) {
  const onPressTap = (tab: string) => {
    setChipTap(tab);
  };

  return (
    <View style={styles.container}>
      <Tap isFocused={chipTap === 'year'} text='최근 1년 매각' onPress={() => onPressTap('year')} />
      <Tap isFocused={chipTap === 'all'} text='전체 기간 매각' onPress={() => onPressTap('all')} />
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

import TextView from '@/src/components/ui/home/text';
import ToolTipButton from './tool-tip';

import { StyleSheet, View } from 'react-native';

export default function InvestRakingTitle() {
  return (
    <View style={styles.container}>
      <TextView type='medium' fontSize={20} lineHeight={28}>
        조각투자 상품 랭킹
      </TextView>

      <ToolTipButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

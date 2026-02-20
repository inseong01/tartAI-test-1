import ToolTipButton from './tool-tip';

import { PretendardText } from '@/src/components/text/pretendard-text';

import { StyleSheet, View } from 'react-native';

export default function InvestRakingTitle() {
  return (
    <View style={styles.container}>
      <PretendardText color='Zinc950' size={20} weight='700' lineHeight={28}>
        조각투자 상품 랭킹
      </PretendardText>

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

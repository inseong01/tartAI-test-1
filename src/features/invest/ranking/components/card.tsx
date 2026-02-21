import { CategoryTapType, InvestmentData } from '../constants/types';
import { getCategoryValue } from '../utils/get-value';

import { PretendardText } from '@/src/components/text/pretendard-text';
import { useWindowWidth } from '@/src/hooks/use-window-width';
import { useTheme } from '@/src/provider/color-theme/use-theme';

import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

interface CardProps extends InvestmentData {
  idx: number;
  category: CategoryTapType;
}

export default function Card({ idx, uri, title, ratio, trade_term_date, category }: CardProps) {
  const value = getCategoryValue(category, ratio, trade_term_date);
  const categoryLabel = category === 'ratio' ? '연 환산 수익률' : '매각까지';

  const { scheme } = useTheme();

  const windowWidth = useWindowWidth();

  return (
    <View style={styles.container}>
      <View style={styles.itemBox}>
        <PretendardText
          color='Zinc500'
          size={14}
          weight='600'
          lineHeight={20}
          style={{ minWidth: 16, textAlign: 'center' }}
        >
          {idx}
        </PretendardText>

        <View
          style={[
            styles.imageWrapper,
            {
              borderColor: scheme === 'light' ? '#F4F4F5' : '#3A3A3C',
            },
          ]}
        >
          <Image source={uri} style={styles.image} />
        </View>

        <View style={styles.titleWrapper}>
          <PretendardText color='Zinc950' size={14} weight='600' lineHeight={20} numberOfLines={1} ellipsizeMode='tail'>
            {title}
          </PretendardText>
        </View>
      </View>

      <View
        style={[
          styles.valueWrapper,
          {
            minWidth: windowWidth >= 690 ? 65 : 40,
          },
        ]}
      >
        <PretendardText color={category === 'ratio' ? 'Red600' : 'Red950'} size={14} weight='600' lineHeight={20}>
          {value}
        </PretendardText>
        <PretendardText color='Zinc400' size={10} weight='400' lineHeight={14}>
          {categoryLabel}
        </PretendardText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
  },
  itemBox: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  imageWrapper: {
    width: 52,
    height: 52,
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  titleWrapper: {
    maxWidth: 420,
    flexShrink: 1,
    overflow: 'hidden',
  },
  valueWrapper: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

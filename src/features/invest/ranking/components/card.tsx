import ColoredText from '@/src/components/ui/invest/ranking/text';

import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';
import { CategoryTapType, InvestmentData } from '../constants/types';
import { getCategoryValue } from '../utils/get-value';

interface CardProps extends InvestmentData {
  idx: number;
  category: CategoryTapType;
}

export default function Card({ idx, uri, title, ratio, trade_term_date, category }: CardProps) {
  const value = getCategoryValue(category, ratio, trade_term_date);
  const categoryLabel = category === 'ratio' ? '연 환산 수익률' : '매각까지';
  const textColorType = category === 'ratio' ? 'Red600' : 'Red950';

  return (
    <View style={styles.container}>
      <ColoredText type='Zinc500'>{idx}</ColoredText>

      <View style={styles.imageWrapper}>
        <Image source={uri} style={styles.image} />
      </View>

      <ColoredText type='Zinc950' numberOfLines={1} ellipsizeMode='tail'>
        {title}
      </ColoredText>

      <View style={styles.valueWrapper}>
        <ColoredText type={textColorType}>{value}</ColoredText>
        <ColoredText type='Zinc400' style={styles.categoryText}>
          {categoryLabel}
        </ColoredText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  imageWrapper: {
    width: 52,
    height: 52,
    borderWidth: 1,
    borderColor: '#F4F4F5',
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  valueWrapper: {
    width: 72,
    alignItems: 'flex-end',
  },
  categoryText: {
    fontSize: 10,
    lineHeight: 14,
  },
});

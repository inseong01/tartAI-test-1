import { CategoryTapType, InvestmentData } from '../constants/types';
import { getCategoryValue } from '../utils/get-value';

import { PretendardText } from '@/src/components/text/pretendard-text';

import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

interface CardProps extends InvestmentData {
  idx: number;
  category: CategoryTapType;
}

export default function Card({ idx, uri, title, ratio, trade_term_date, category }: CardProps) {
  const value = getCategoryValue(category, ratio, trade_term_date);
  const categoryLabel = category === 'ratio' ? '연 환산 수익률' : '매각까지';

  return (
    <View style={styles.container}>
      <PretendardText color='Zinc500' size={14} weight='600'>
        {idx}
      </PretendardText>

      <View style={styles.imageWrapper}>
        <Image source={uri} style={styles.image} />
      </View>

      <View style={styles.titleWrapper}>
        <PretendardText color='Zinc950' size={14} weight='600' numberOfLines={1} ellipsizeMode='tail'>
          {title}
        </PretendardText>
      </View>

      <View style={styles.valueWrapper}>
        <PretendardText color={category === 'ratio' ? 'Red600' : 'Red950'} size={14} weight='600'>
          {value}
        </PretendardText>
        <PretendardText color='Zinc400' size={10} weight='400' style={{ lineHeight: 14 }}>
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
    alignItems: 'center',
  },
  imageWrapper: {
    width: 52,
    height: 52,
    borderWidth: 1,
    borderColor: '#F4F4F5',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  titleWrapper: {
    flexShrink: 1,
  },
  valueWrapper: {
    width: 72,
    alignItems: 'flex-end',
  },
});

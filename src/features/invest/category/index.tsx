import { PretendardText } from '@/src/components/text/pretendard-text';
import CategoryFrame from '@/src/components/ui/invest/category/frame';

import { Image } from 'expo-image';

import { ScrollView, StyleSheet, View } from 'react-native';

export default function InvestCategories() {
  return (
    <View style={styles.categoryContainer}>
      {/* 제목 */}
      <View style={styles.textContainer}>
        <PretendardText color='Zinc950' size={24} weight='700' style={{ lineHeight: 34 }}>
          카테고리별 투자상품 찾기
        </PretendardText>
      </View>

      {/* 가로 스크롤 */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        <CategoryFrame title='미술품' handlePress={() => {}}>
          <Image style={styles.imageSize} source={require('./../../../../assets/invest/art.png')} />
        </CategoryFrame>
        <CategoryFrame title='음악' handlePress={() => {}}>
          <Image style={styles.imageSize} source={require('./../../../../assets/invest/music.png')} />
        </CategoryFrame>
        <CategoryFrame title='가축' handlePress={() => {}}>
          <Image style={styles.imageSize} source={require('./../../../../assets/invest/cow.png')} />
        </CategoryFrame>
        <CategoryFrame title='부동산' handlePress={() => {}}>
          <Image style={styles.imageSize} source={require('./../../../../assets/invest/house.png')} />
        </CategoryFrame>
        <CategoryFrame title='명품' handlePress={() => {}}>
          <Image style={styles.imageSize} source={require('./../../../../assets/invest/goods.png')} />
        </CategoryFrame>
        <CategoryFrame title='대체투자' handlePress={() => {}}>
          <Image style={styles.imageSize} source={require('./../../../../assets/invest/investment.png')} />
        </CategoryFrame>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'column',
    marginBottom: 20,
    gap: 16,
  },
  textContainer: {
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    gap: 12,
  },
  imageSize: {
    width: 44,
    height: 44,
  },
});

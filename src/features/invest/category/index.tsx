import TextView from '@/src/components/ui/home/text';
import CategoryFrame from '@/src/components/ui/invest/category/frame';

import { Image } from 'expo-image';

import { ScrollView, StyleSheet, View } from 'react-native';

export default function InvestCategories() {
  return (
    <View style={styles.categoryContainer}>
      <View style={styles.textContainer}>
        <TextView type='large' fontSize={24} lineHeight={34}>
          카테고리별 투자상품 찾기
        </TextView>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        <View style={styles.categoryGroup}>
          {/* ISSUSE: SVG 색상 변질 문제 */}
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
        </View>
      </ScrollView>
    </View>
  );
}

const basePadding = {
  paddingLeft: 20,
  paddingRight: 20,
};

const styles = StyleSheet.create({
  categoryContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  textContainer: {
    ...basePadding,
  },
  scrollContainer: {
    ...basePadding,
    width: '100%',
    flexGrow: 0,
  },
  categoryGroup: {
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
  },
  imageSize: {
    width: 44,
    height: 44,
  },
});

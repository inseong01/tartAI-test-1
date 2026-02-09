import ArtSVG from '@/src/components/icons/art-svg';
import CowSVG from '@/src/components/icons/cow-svg';
import GoodsSVG from '@/src/components/icons/goods-svg';
import HouseSVG from '@/src/components/icons/house-svg';
import InvestmentSVG from '@/src/components/icons/invest-svg';
import MusicSVG from '@/src/components/icons/music-svg';

import TextView from '@/src/components/ui/home/text';
import CategoryFrame from '@/src/components/ui/invest/category/frame';

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
          <CategoryFrame title='미술품'>
            <ArtSVG />
          </CategoryFrame>
          <CategoryFrame title='음악'>
            <MusicSVG />
          </CategoryFrame>
          <CategoryFrame title='가축'>
            <CowSVG />
          </CategoryFrame>
          <CategoryFrame title='부동산'>
            <HouseSVG />
          </CategoryFrame>
          <CategoryFrame title='명품'>
            <GoodsSVG />
          </CategoryFrame>
          <CategoryFrame title='대체투자'>
            <InvestmentSVG />
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
});

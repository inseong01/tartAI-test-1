import { ReactNode } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { PretendardText } from '@/src/components/text/pretendard-text';
import InvestCategoryIcon from './icon';

interface CategoryFrameProps {
  title: string;
  handlePress: () => void;
  children: ReactNode;
}

export default function CategoryFrame({ title, handlePress, children }: CategoryFrameProps) {
  return (
    <TouchableOpacity style={styles.box} onPress={handlePress} activeOpacity={1}>
      <InvestCategoryIcon>{children}</InvestCategoryIcon>

      <PretendardText weight='600' size={14} color='Zinc950' lineHeight={20} style={styles.text}>
        {title}
      </PretendardText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    minWidth: 60,
    minHeight: 84,
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

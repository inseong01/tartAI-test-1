import { CategoryTapType } from '../../constants/types';

import { SharedValue, withSpring } from 'react-native-reanimated';

interface UseTabAnimateProps {
  tabWidth: number;
  translateX: SharedValue<number>;
  setCategoryTap: (type: CategoryTapType) => void;
}

export function useTabAnimate({ tabWidth, translateX, setCategoryTap }: UseTabAnimateProps) {
  const handlePress = (type: CategoryTapType) => {
    setCategoryTap(type);

    translateX.set(() => {
      if (type === 'ratio') return withSpring(0);
      return withSpring(tabWidth);
    });
  };

  return { handlePress };
}

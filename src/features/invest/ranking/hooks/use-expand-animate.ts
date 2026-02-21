import { INIT_GROUP_HEIGHT } from '../constants/const';

import { useAnimatedStyle, useDerivedValue, withSpring } from 'react-native-reanimated';

export function useExpandAnimate(isPressed: boolean) {
  const derivedValue = useDerivedValue(() => {
    if (isPressed) {
      return withSpring(INIT_GROUP_HEIGHT * 2);
    }
    return withSpring(INIT_GROUP_HEIGHT);
  }, [isPressed]);

  const animatedTapStyle = useAnimatedStyle(() => ({
    height: derivedValue.value,
  }));

  return { animatedTapStyle };
}

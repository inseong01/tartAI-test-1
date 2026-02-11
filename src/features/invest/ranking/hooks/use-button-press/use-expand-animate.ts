import { INIT_GROUP_HEIGHT } from '../../constants/const';

import { measure, useAnimatedRef, useSharedValue, withSpring } from 'react-native-reanimated';

export function useExpandAnimate() {
  const animatedRef = useAnimatedRef();
  const tabHeight = useSharedValue(INIT_GROUP_HEIGHT);

  const expandHeight = () => {
    const measurement = measure(animatedRef);
    if (measurement === null) return;
    if (INIT_GROUP_HEIGHT >= tabHeight.value) {
      tabHeight.set(withSpring(measurement.height * 2));
      return;
    }
    tabHeight.set(withSpring(INIT_GROUP_HEIGHT));
  };

  return { animatedRef, tabHeight, expandHeight };
}

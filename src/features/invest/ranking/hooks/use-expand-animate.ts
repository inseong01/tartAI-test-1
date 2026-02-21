import { INIT_GROUP_HEIGHT } from '../constants/const';

import { useState } from 'react';
import { LayoutChangeEvent } from 'react-native';
import { useAnimatedStyle, useDerivedValue, withSpring } from 'react-native-reanimated';

export function useExpandAnimate(isPressed: boolean) {
  const [maxHeight, setMaxHeight] = useState(INIT_GROUP_HEIGHT);

  const derivedValue = useDerivedValue(() => {
    if (isPressed) {
      return withSpring(maxHeight);
    }
    return withSpring(maxHeight / 2);
  }, [maxHeight, isPressed]);

  const animatedTapStyle = useAnimatedStyle(() => ({
    height: derivedValue.value,
  }));

  const setLayout = (e: LayoutChangeEvent) => {
    const nativeHeight = e.nativeEvent.layout.height;
    setMaxHeight(nativeHeight);
  };

  return { setLayout, animatedTapStyle };
}

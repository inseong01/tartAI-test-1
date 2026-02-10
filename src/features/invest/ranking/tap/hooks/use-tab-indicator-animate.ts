import { useState } from 'react';
import { LayoutChangeEvent } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';

export function useTabIndicatorAnimate() {
  const [containerWidth, setContainerWidth] = useState(0);
  const translateX = useSharedValue(0);

  const handleLayout = (e: LayoutChangeEvent) => {
    setContainerWidth(e.nativeEvent.layout.width);
  };

  const tabWidth = containerWidth / 2;

  return { translateX, tabWidth, handleLayout };
}

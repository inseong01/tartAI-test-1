import { Component, useState } from 'react';
import { AnimatedRef, measure, useSharedValue, withSpring } from 'react-native-reanimated';

const INIT_GROUP_HEIGHT = 334;

export function useExpandAnimate(animatedRef: AnimatedRef<Component<{}, {}, any>>) {
  const [isClicked, setClick] = useState(false);

  const tabHeight = useSharedValue(INIT_GROUP_HEIGHT);

  const expandHeight = () => {
    setClick((prev) => !prev);

    const measurement = measure(animatedRef);
    if (measurement === null) return;
    if (!isClicked) {
      tabHeight.set(withSpring(measurement.height * 2));
      return;
    }
    tabHeight.set(withSpring(measurement.height / 2));
  };

  return { isClicked, tabHeight, expandHeight };
}

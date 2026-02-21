import { useEffect, useState } from 'react';
import { Dimensions, ScaledSize } from 'react-native';

export function useWindowWidth(): number {
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);

  useEffect(() => {
    const handler = ({ window }: { window: ScaledSize }) => {
      setWindowWidth(window.width);
    };

    const subscription = Dimensions.addEventListener('change', handler);

    return () => {
      subscription.remove();
    };
  }, []);

  return windowWidth;
}

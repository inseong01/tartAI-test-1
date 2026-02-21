import { useWindowDimensions } from 'react-native';

export function useSafeFontScale() {
  const { fontScale } = useWindowDimensions();
  return fontScale < 1 ? 1 : Number(fontScale.toFixed(2));
}

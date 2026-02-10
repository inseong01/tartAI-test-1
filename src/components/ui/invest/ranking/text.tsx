import { ReactNode } from 'react';
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';

type ColorType = 'base' | 'sub' | 'Zinc500' | 'highlight' | 'date';

interface ColorProps extends TextProps {
  type: ColorType;
  children: ReactNode;
  style?: TextStyle | TextStyle[];
}

const colorMap: Record<ColorType, string> = {
  base: '#09090B',
  sub: '#9F9FA9',
  Zinc500: '#71717B',
  highlight: '#FB5353',
  date: '#2E0808',
};

export default function ColoredText({ type, children, style, ...rest }: ColorProps) {
  return (
    <Text style={[styles.text, { color: colorMap[type] }, style]} {...rest}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Pretendard',
    fontWeight: '600',
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: 14,
  },
});

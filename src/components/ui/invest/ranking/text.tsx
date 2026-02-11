import { ReactNode } from 'react';
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';

type ColorType = 'Zinc950' | 'Zinc400' | 'Zinc500' | 'Red600' | 'Red950' | 'Zinc600';

interface ColorProps extends TextProps {
  type: ColorType;
  children: ReactNode;
  style?: TextStyle | TextStyle[];
}

const colorMap: Record<ColorType, string> = {
  Zinc950: '#09090B',
  Zinc400: '#9F9FA9',
  Zinc500: '#71717B',
  Zinc600: '#52525C',
  Red600: '#FB5353',
  Red950: '#2E0808',
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

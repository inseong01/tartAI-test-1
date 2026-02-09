import { ReactNode } from 'react';
import { StyleSheet, Text } from 'react-native';

interface LargeFont {
  type: 'large';
  children: ReactNode;
  fontSize: 24;
  lineHeight: 34;
}

interface MediumFont {
  type: 'medium';
  children: ReactNode;
  fontSize: 20;
  lineHeight: 28;
}

type TextViewProps = LargeFont | MediumFont;

export default function TextView({ children, fontSize = 24, lineHeight = 34 }: TextViewProps) {
  return <Text style={[styles.text, { fontSize, lineHeight }]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Pretendard',
    letterSpacing: 0,
    fontWeight: '700',
    color: '#09090B',
  },
});

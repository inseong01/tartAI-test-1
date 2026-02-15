import React from 'react';
import { Platform, TextProps as RNTextProps, Text } from 'react-native';

type Weight = '400' | '600' | '700';
type Size = 10 | 14 | 16 | 20 | 24;
type Color = 'Zinc950' | 'Zinc400' | 'Zinc500' | 'Red600' | 'Red950' | 'Zinc600';

interface CustomTextProps extends RNTextProps {
  weight: Weight;
  size: Size;
  color: Color;
}

export function PretendardText({ weight, size, color = 'Zinc950', style, children, ...rest }: CustomTextProps) {
  const fontFamilyMap: Record<Weight, string> = {
    '400': 'PretendardRegular',
    '600': 'PretendardSemiBold',
    '700': 'PretendardBold',
  };

  const colorMap: Record<Color, string> = {
    Zinc950: '#09090B',
    Zinc400: '#9F9FA9',
    Zinc500: '#71717B',
    Zinc600: '#52525C',
    Red600: '#FB5353',
    Red950: '#2E0808',
  };

  const webStyle = Platform.OS === 'web' ? { fontWeight: weight } : {};

  return (
    <Text
      style={[
        {
          fontFamily: fontFamilyMap[weight],
          fontSize: size,
          color: colorMap[color],
          letterSpacing: 0,
        },
        webStyle,
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
}

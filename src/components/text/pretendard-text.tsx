import { useTheme } from '@/src/provider/color-theme/use-theme';
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
  const { scheme } = useTheme();

  const fontFamilyMap: Record<Weight, string> = {
    '400': 'PretendardRegular',
    '600': 'PretendardSemiBold',
    '700': 'PretendardBold',
  };

  const colorMap: Record<Color, string> = {
    Zinc950: scheme === 'light' ? '#09090B' : '#FAFAFA',
    Zinc400: scheme === 'light' ? '#9F9FA9' : '#E5E5E5',
    Zinc500: scheme === 'light' ? '#71717B' : '#D4D4D8',
    Zinc600: scheme === 'light' ? '#52525C' : '#A1A1AA',
    Red600: scheme === 'light' ? '#FB5353' : '#FCA5A5',
    Red950: scheme === 'light' ? '#2E0808' : '#FEE2E2',
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

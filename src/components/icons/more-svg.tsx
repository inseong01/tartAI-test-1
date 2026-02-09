import Svg, { Path, SvgProps } from 'react-native-svg';

export default function MoreSVG(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill='none' {...props}>
      <Path
        fill='#9F9FA9'
        d='M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-7.875-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm12.75 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z'
      />
    </Svg>
  );
}

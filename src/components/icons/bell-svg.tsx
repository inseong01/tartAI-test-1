import Svg, { Path, SvgProps } from 'react-native-svg';

export default function BellSVG(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill='none' {...props}>
      <Path
        fill='#9F9FA9'
        d='M15.75 21a.75.75 0 0 1-.75.75H9a.75.75 0 1 1 0-1.5h6a.75.75 0 0 1 .75.75Zm5.045-4.506c-.522-.896-1.295-3.432-1.295-6.744a7.5 7.5 0 0 0-15 0c0 3.313-.774 5.848-1.295 6.744A1.5 1.5 0 0 0 4.5 18.75h15a1.5 1.5 0 0 0 1.294-2.256Z'
      />
    </Svg>
  );
}

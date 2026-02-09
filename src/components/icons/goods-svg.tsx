import Svg, { Defs, LinearGradient, Path, Stop, SvgProps } from 'react-native-svg';

export default function GoodsSVG(props: SvgProps) {
  return (
    <Svg width={44} height={44} fill='none' {...props}>
      <Path fill='#fff' d='M0 0h44v44H0z' />
      <Path
        fill='url(#a)'
        d='M31.886 13.74h-19.36a2.783 2.783 0 0 0-2.723 2.211L6.096 33.634A4.452 4.452 0 0 0 10.454 39h23.505c2.826 0 4.937-2.6 4.357-5.366L34.61 15.951a2.783 2.783 0 0 0-2.723-2.211Z'
      />
      <Path
        fill='url(#b)'
        d='M15.799 25.094h12.818c.911 0 1.769-.428 2.316-1.155l4.186-5.565-.508-2.423a2.783 2.783 0 0 0-2.723-2.211h-19.36a2.783 2.783 0 0 0-2.723 2.211l-.508 2.423 4.186 5.565a2.898 2.898 0 0 0 2.316 1.155Z'
      />
      <Path
        fill='url(#c)'
        stroke='url(#d)'
        strokeWidth={0.275}
        d='M23.799 20.862c.775 0 1.403.629 1.403 1.403v5.065c0 .775-.628 1.404-1.403 1.404h-3.166c-.775 0-1.403-.63-1.403-1.404v-5.065c0-.774.628-1.403 1.403-1.403h3.166Z'
      />
      <Path
        fill='url(#e)'
        d='M28.183 15.525c-.717 0-1.297-.597-1.297-1.333v-1.7c0-2.661-2.105-4.826-4.694-4.826s-4.694 2.165-4.694 4.826v1.7c0 .736-.58 1.333-1.297 1.333-.716 0-1.297-.597-1.297-1.333v-1.7C14.904 8.36 18.174 5 22.191 5c4.017 0 7.287 3.36 7.287 7.492v1.7c0 .736-.581 1.333-1.298 1.333h.003Z'
      />
      <Defs>
        <LinearGradient id='a' x1={8.249} x2={38.499} y1={23.925} y2={40.837} gradientUnits='userSpaceOnUse'>
          <Stop stopColor='#F2A960' />
          <Stop offset={0.529} stopColor='#FFB174' />
          <Stop offset={1} stopColor='#EA8537' />
        </LinearGradient>
        <LinearGradient id='b' x1={12.511} x2={31.898} y1={17.325} y2={22.962} gradientUnits='userSpaceOnUse'>
          <Stop stopColor='#D3883D' />
          <Stop offset={0.451} stopColor='#F39851' />
          <Stop offset={1} stopColor='#F2973D' />
        </LinearGradient>
        <LinearGradient id='c' x1={19.249} x2={24.611} y1={21.45} y2={28.6} gradientUnits='userSpaceOnUse'>
          <Stop stopColor='#FCE398' />
          <Stop offset={0.328} stopColor='#FFF4D5' />
          <Stop offset={1} stopColor='#FFBF00' />
        </LinearGradient>
        <LinearGradient id='d' x1={19.662} x2={24.199} y1={21.313} y2={29.288} gradientUnits='userSpaceOnUse'>
          <Stop stopColor='#FCBF31' />
          <Stop offset={1} stopColor='#FCB231' />
        </LinearGradient>
        <LinearGradient id='e' x1={22.191} x2={22.191} y1={5} y2={15.525} gradientUnits='userSpaceOnUse'>
          <Stop stopColor='#D0AD7C' />
          <Stop offset={1} stopColor='#715631' />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

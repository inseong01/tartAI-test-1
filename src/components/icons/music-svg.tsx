import Svg, { Defs, LinearGradient, Path, Stop, SvgProps } from 'react-native-svg';

export default function MusicSVG(props: SvgProps) {
  return (
    <Svg width={44} height={44} fill='none' {...props}>
      <Path fill='#fff' d='M0 0h44v44H0z' />
      <Path
        fill='url(#a)'
        d='M18.529 39.307c7.963 0 14.419-6.456 14.419-14.42 0-7.963-6.456-14.418-14.42-14.418-7.963 0-14.419 6.455-14.419 14.419 0 7.963 6.456 14.419 14.42 14.419Z'
      />
      <Path fill='url(#b)' fillOpacity={0.5} d='M18.564 31.35a6.463 6.463 0 1 0 0-12.925 6.463 6.463 0 0 0 0 12.925Z' />
      <Path fill='url(#c)' d='M18.563 30.8a5.912 5.912 0 1 0 0-11.825 5.912 5.912 0 0 0 0 11.825Z' />
      <Path fill='#4865C9' d='M18.564 27.225a2.338 2.338 0 1 0 0-4.675 2.338 2.338 0 0 0 0 4.675Z' />
      <Path fill='#364A91' d='M18.563 26.95a2.062 2.062 0 1 0 0-4.125 2.062 2.062 0 0 0 0 4.125Z' />
      <Path
        fill='url(#d)'
        d='M40.013 6.39v11.405c0 1.728-1.55 3.128-3.465 3.128-1.901 0-3.45-1.407-3.45-3.128 0-1.722 1.549-3.128 3.45-3.128.277 0 .553.03.823.09v-3.578c0-.875-.778-1.549-1.639-1.451l-5.485.673c-.734.09-1.317.719-1.332 1.452v7.7c0 1.729-1.55 3.128-3.45 3.128-1.946 0-3.465-1.377-3.465-3.128 0-1.728 1.55-3.128 3.465-3.128.262 0 .539.03.823.105V7.677c0-.846.629-1.579 1.482-1.699l10.357-1.272c.494-.06.98.09 1.347.442.329.292.539.756.539 1.242Z'
      />
      <Defs>
        <LinearGradient id='a' x1={3.456} x2={26.402} y1={13.2} y2={37.813} gradientUnits='userSpaceOnUse'>
          <Stop offset={0.114} stopColor='#ACBBF2' />
          <Stop offset={0.408} stopColor='#C8D0ED' />
          <Stop offset={1} stopColor='#91A7F7' />
        </LinearGradient>
        <LinearGradient id='b' x1={13.508} x2={25.575} y1={18.501} y2={30.568} gradientUnits='userSpaceOnUse'>
          <Stop stopColor='#94A6E4' />
          <Stop offset={1} stopColor='#4D70EB' />
        </LinearGradient>
        <LinearGradient id='c' x1={13.937} x2={24.977} y1={19.045} y2={30.084} gradientUnits='userSpaceOnUse'>
          <Stop stopColor='#94A6E4' />
          <Stop offset={1} stopColor='#4D70EB' />
        </LinearGradient>
        <LinearGradient id='d' x1={30.361} x2={39.649} y1={3.575} y2={19.663} gradientUnits='userSpaceOnUse'>
          <Stop stopColor='#FF9580' />
          <Stop offset={1} stopColor='#FF5C5C' />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

import Svg, { Defs, LinearGradient, Path, Stop, SvgProps } from 'react-native-svg';

export default function CowSVG(props: SvgProps) {
  return (
    <Svg width={44} height={44} fill='none' {...props}>
      <Path fill='#fff' d='M0 0h44v44H0z' />
      <Path fill='url(#a)' d='M26.257 12.063s.428-7.274 2.567-7.274c2.14 0 2.598 6.066 1.888 8.65l-4.455-1.376Z' />
      <Path fill='url(#b)' d='M18.233 12.063s-.427-7.274-2.567-7.274-2.598 6.066-1.887 8.65l4.454-1.376Z' />
      <Path
        fill='url(#c)'
        d='M29.333 13.608s1.44-5.454 7.136-4.012c.588.148.986.695.942 1.295-.116 1.588-.808 4.603-4.304 5.646h-3.774v-2.929Z'
      />
      <Path
        fill='#F3E8E5'
        d='m34.544 16.684-1.871-3.93c-2.693-2.66-6.891-3.7-10.38-3.7l-11.111 7.619-1.303 7.02c1.24 6.177 4.1 13.197 4.1 13.197h16.628s2.883-7.08 4.115-13.275l-.178-6.931Z'
      />
      <Path
        fill='url(#d)'
        d='M14.965 13.608s-1.44-5.454-7.136-4.012a1.247 1.247 0 0 0-.942 1.295c.116 1.588.809 4.603 4.304 5.646h3.774v-2.929Z'
      />
      <Path
        fill='url(#e)'
        d='M32.614 12.646c-1.352.786-2.399 2.088-2.797 3.583-.555 2.088.179 4.454 1.826 5.883.889.77 1.969 1.252 3.107 1.609.577-2.837.807-5.492.26-7.227a9.097 9.097 0 0 0-2.396-3.848Z'
      />
      <Path
        fill='url(#f)'
        d='M22.397 9.74a5.755 5.755 0 0 0-.15-.687h-.004c-4.814 0-10.978 1.988-12.668 7.488-.529 1.721-.3 4.362.265 7.179.887-1.05 2.054-1.862 3.36-2.28 1.163-.373 2.444-.466 3.458-1.148a3.53 3.53 0 0 0 1.526-2.705c.024-.468-.046-.94.017-1.405.139-1.023.905-1.856 1.76-2.429.645-.433 1.376-.775 1.863-1.383.575-.72.712-1.717.573-2.63Z'
      />
      <Path fill='url(#g)' d='M17.458 24.15a1.6 1.6 0 1 0 0-3.198 1.6 1.6 0 0 0 0 3.199Z' />
      <Path
        fill='url(#h)'
        d='M26.77 27.013h-8.773a6.032 6.032 0 0 0-5.882 4.708c-.096.426-.151.869-.151 1.324 0 3.332 2.7 6.032 6.032 6.032h8.772c3.332 0 6.032-2.7 6.032-6.032 0-.248-.02-.491-.048-.732a6.03 6.03 0 0 0-5.983-5.3Zm-.977 2.836c.716 0 1.296.62 1.296 1.383 0 .764-.58 1.383-1.296 1.383-.717 0-1.297-.62-1.297-1.383 0-.764.58-1.383 1.297-1.383Zm-6.765 0c.716 0 1.296.62 1.296 1.383 0 .764-.58 1.383-1.296 1.383-.716 0-1.296-.62-1.296-1.383 0-.764.58-1.383 1.296-1.383Z'
      />
      <Path
        fill='#AF5544'
        d='M19.038 32.61c.716 0 1.296-.619 1.296-1.382 0-.764-.58-1.383-1.296-1.383-.717 0-1.297.619-1.297 1.383 0 .763.58 1.383 1.297 1.383ZM25.802 32.61c.716 0 1.296-.619 1.296-1.382 0-.764-.58-1.383-1.296-1.383-.716 0-1.296.619-1.296 1.383 0 .763.58 1.383 1.296 1.383Z'
      />
      <Path fill='url(#i)' d='M26.898 24.099a1.6 1.6 0 1 0 0-3.199 1.6 1.6 0 0 0 0 3.199Z' />
      <Defs>
        <LinearGradient id='a' x1={31.023} x2={26.257} y1={9.114} y2={9.114} gradientUnits='userSpaceOnUse'>
          <Stop stopColor='#FBD6A4' />
          <Stop offset={1} stopColor='#F5B763' />
        </LinearGradient>
        <LinearGradient id='b' x1={18.233} x2={13.468} y1={9.114} y2={9.114} gradientUnits='userSpaceOnUse'>
          <Stop stopColor='#FBD6A4' />
          <Stop offset={1} stopColor='#F5B763' />
        </LinearGradient>
        <LinearGradient id='c' x1={33.374} x2={33.374} y1={9.353} y2={16.537} gradientUnits='userSpaceOnUse'>
          <Stop stopColor='#A2A0A0' />
          <Stop offset={1} stopColor='#3C3B3B' />
        </LinearGradient>
        <LinearGradient id='d' x1={10.925} x2={10.925} y1={9.353} y2={16.537} gradientUnits='userSpaceOnUse'>
          <Stop stopColor='#A2A0A0' />
          <Stop offset={1} stopColor='#3C3B3B' />
        </LinearGradient>
        <LinearGradient id='e' x1={32.477} x2={32.477} y1={12.646} y2={23.721} gradientUnits='userSpaceOnUse'>
          <Stop stopColor='#747070' />
          <Stop offset={1} stopColor='#DAD2D2' />
        </LinearGradient>
        <LinearGradient id='f' x1={15.862} x2={15.862} y1={9.053} y2={23.72} gradientUnits='userSpaceOnUse'>
          <Stop stopColor='#747070' />
          <Stop offset={1} stopColor='#DAD2D2' />
        </LinearGradient>
        <LinearGradient id='g' x1={16.361} x2={18.286} y1={21.313} y2={24.2} gradientUnits='userSpaceOnUse'>
          <Stop stopColor='#949494' />
          <Stop offset={1} stopColor='#1A1414' />
        </LinearGradient>
        <LinearGradient id='h' x1={16.362} x2={29.287} y1={27.913} y2={38.972} gradientUnits='userSpaceOnUse'>
          <Stop stopColor='#FFBFC2' />
          <Stop offset={1} stopColor='#F5868C' />
        </LinearGradient>
        <LinearGradient id='i' x1={25.802} x2={27.727} y1={21.26} y2={24.148} gradientUnits='userSpaceOnUse'>
          <Stop stopColor='#949494' />
          <Stop offset={1} stopColor='#1A1414' />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

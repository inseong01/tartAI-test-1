import Svg, { Defs, LinearGradient, Path, Stop, SvgProps } from 'react-native-svg';

export default function HouseSVG(props: SvgProps) {
  return (
    <Svg width={44} height={44} fill='none' {...props}>
      <Path
        fill='url(#a)'
        d='M33.4 37.714H9.826a1.97 1.97 0 0 1-1.967-1.969V18.48L21.613 6.286l13.746 12.193v17.273a1.958 1.958 0 0 1-1.96 1.962Z'
      />
      <Path
        fill='url(#b)'
        d='M38.237 22h-.042a1.86 1.86 0 0 1-1.215-.452l-15-13.032L6.977 21.548A1.832 1.832 0 0 1 5.764 22c-1.673 0-2.471-2.03-1.229-3.143L20.751 4.393a1.857 1.857 0 0 1 2.456 0l16.258 14.47C40.708 19.97 39.917 22 38.237 22Z'
      />
      <Path
        fill='#B2CED4'
        d='M16.816 19.643h-3.772c-.694 0-1.257.563-1.257 1.257v3.771c0 .695.563 1.258 1.257 1.258h3.772c.694 0 1.257-.563 1.257-1.258V20.9c0-.694-.563-1.257-1.257-1.257Z'
      />
      <Path
        fill='url(#c)'
        d='M26.714 22.786c1.25 0 2.45.547 3.334 1.521.884.974 1.38 2.296 1.38 3.673v6.582a1.58 1.58 0 0 1-1.58 1.58H23.58a1.58 1.58 0 0 1-1.58-1.58V27.98c0-1.377.497-2.699 1.38-3.673.885-.974 2.084-1.521 3.334-1.521Z'
      />
      <Defs>
        <LinearGradient id='a' x1={21.609} x2={21.609} y1={6.286} y2={37.714} gradientUnits='userSpaceOnUse'>
          <Stop stopColor='#FDF6EA' />
          <Stop offset={0.615} stopColor='#FFEAC7' />
        </LinearGradient>
        <LinearGradient id='b' x1={14.988} x2={31.213} y1={7.425} y2={20.9} gradientUnits='userSpaceOnUse'>
          <Stop stopColor='#FC8068' />
          <Stop offset={1} stopColor='#D6605D' />
        </LinearGradient>
        <LinearGradient id='c' x1={26.714} x2={26.714} y1={22.786} y2={36.143} gradientUnits='userSpaceOnUse'>
          <Stop offset={0.197} stopColor='#916B35' />
          <Stop offset={1} stopColor='#DBB98B' />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

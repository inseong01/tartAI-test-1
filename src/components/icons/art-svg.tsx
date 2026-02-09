import Svg, { Defs, LinearGradient, Path, Stop, SvgProps } from 'react-native-svg';

export default function ArtSVG(props: SvgProps) {
  return (
    <Svg width={44} height={44} fill='none' {...props}>
      <Path fill='#fff' d='M0 0h44v44H0z' />
      <Path
        fill='url(#a)'
        d='M38.553 27.965V15.183c.008-.437.163-.859.44-1.197a3.698 3.698 0 0 0-5.191-5.193c-.338.278-.76.433-1.197.441h-7.23a1.943 1.943 0 0 1-1.199-.442 3.686 3.686 0 0 0-4.566 0c-.338.278-.76.434-1.198.442h-7.229a1.938 1.938 0 0 1-1.197-.441 3.698 3.698 0 0 0-5.193 5.192c.278.338.433.76.441 1.198v12.782a1.941 1.941 0 0 1-.44 1.197 3.697 3.697 0 0 0 5.191 5.193c.338-.278.76-.433 1.198-.44h7.23c.437.008.86.163 1.197.441a3.685 3.685 0 0 0 4.566 0c.339-.278.76-.434 1.199-.442h7.228c.438.008.86.163 1.197.441a3.698 3.698 0 0 0 5.194-5.192 1.937 1.937 0 0 1-.441-1.198Z'
      />
      <Path
        fill='url(#b)'
        d='M34.844 11.701H8.929c-.681 0-1.234.553-1.234 1.235v17.276c0 .681.553 1.234 1.234 1.234h25.915c.681 0 1.234-.553 1.234-1.234V12.936c0-.682-.553-1.235-1.234-1.235Z'
      />
      <Path
        fill='#8DD0D4'
        d='M33.719 28.3V14.686a.62.62 0 0 0-.623-.62H10.691a.62.62 0 0 0-.622.62v13.612a.62.62 0 0 0 .622.619h22.405a.62.62 0 0 0 .623-.619Z'
      />
      <Path
        fill='url(#c)'
        d='M33.719 28.357V16.004a.574.574 0 0 0-.586-.561H12.03a.574.574 0 0 0-.586.561v12.352c0 .31.262.562.586.562h21.103a.574.574 0 0 0 .586-.561Z'
      />
      <Defs>
        <LinearGradient id='a' x1={9.652} x2={34.135} y1={8} y2={35.148} gradientUnits='userSpaceOnUse'>
          <Stop stopColor='#E49D66' />
          <Stop offset={1} stopColor='#ED8C41' />
        </LinearGradient>
        <LinearGradient id='b' x1={21.887} x2={33.717} y1={11.701} y2={32.193} gradientUnits='userSpaceOnUse'>
          <Stop stopColor='#D3883D' />
          <Stop offset={1} stopColor='#F8C18A' />
        </LinearGradient>
        <LinearGradient id='c' x1={11.444} x2={33.719} y1={16.321} y2={28.04} gradientUnits='userSpaceOnUse'>
          <Stop stopColor='#D4E7E8' />
          <Stop offset={1} stopColor='#98F9FE' />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

import Svg, { Defs, LinearGradient, Path, Stop, SvgProps } from 'react-native-svg';

export default function InvestmentSVG(props: SvgProps) {
  return (
    <Svg width={44} height={44} fill='none' {...props}>
      <Path fill='#fff' d='M0 0h44v44H0z' />
      <Path fill='url(#a)' d='M22.172 31.219a8.8 8.8 0 1 0 0-17.6 8.8 8.8 0 0 0 0 17.6Z' />
      <Path fill='url(#b)' d='M22.17 28.791a6.372 6.372 0 1 0 0-12.745 6.372 6.372 0 0 0 0 12.745Z' />
      <Path
        stroke='url(#c)'
        strokeOpacity={0.7}
        strokeWidth={2}
        d='M22.17 17.046a5.373 5.373 0 1 1 0 10.746 5.373 5.373 0 0 1 0-10.746Z'
      />
      <Path
        fill='#E1A942'
        d='M22.776 21.888h-1.214a.683.683 0 0 1 0-1.366h2.428a.531.531 0 0 0 0-1.062H22.7v-.683a.531.531 0 1 0-1.062 0v.683h-.076a1.745 1.745 0 1 0 0 3.49h1.214a.683.683 0 0 1 0 1.366h-2.428a.531.531 0 1 0 0 1.062h1.29v.682a.531.531 0 1 0 1.062 0v-.682h.076a1.745 1.745 0 1 0 0-3.49Z'
      />
      <Path
        fill='url(#d)'
        d='M5.188 36.236a3.375 3.375 0 0 1 .635-4.73l4.108-3.134a4.704 4.704 0 0 1 2.303-.944 4.656 4.656 0 0 1 2.103.191c1.32.437 2.524 1.256 3.884 1.548l4.211.905a1.451 1.451 0 0 1 .58 2.568l5.797-4.42a1.45 1.45 0 1 1 1.76 2.306l-7.86 5.997c-.418.319-.928.491-1.453.492l-10.735.001c-.514 0-1.014.169-1.422.48a2.345 2.345 0 0 1-3.287-.442l-.624-.818Z'
      />
      <Path
        fill='#FAAA9A'
        d='M24.439 31.556a2.307 2.307 0 0 1-2.793 2.196l-6.293-1.354a.43.43 0 0 1 .18-.84l6.295 1.351a1.412 1.412 0 0 0 1.213-.29.19.19 0 0 1-.024.022l1.422-1.085Z'
      />
      <Path
        fill='url(#e)'
        d='M39.465 8.182a3.375 3.375 0 0 1-.636 4.73l-4.108 3.135a4.704 4.704 0 0 1-2.302.944 4.655 4.655 0 0 1-2.103-.191c-1.321-.437-2.525-1.256-3.885-1.548l-4.21-.905a1.45 1.45 0 0 1-.581-2.568l-5.796 4.42a1.45 1.45 0 1 1-1.76-2.306l7.86-5.998c.417-.318.927-.49 1.452-.49l10.735-.002c.514 0 1.014-.17 1.423-.48a2.345 2.345 0 0 1 3.287.441l.624.818Z'
      />
      <Path
        fill='#FAAA9A'
        d='M20.218 12.863a2.31 2.31 0 0 1 2.793-2.196l6.292 1.354a.43.43 0 0 1-.18.84l-6.295-1.35a1.44 1.44 0 0 0-1.189.268l-1.421 1.084Z'
      />
      <Defs>
        <LinearGradient id='a' x1={16.913} x2={29.563} y1={16.225} y2={31.35} gradientUnits='userSpaceOnUse'>
          <Stop stopColor='#EFC16B' />
          <Stop offset={0.665} stopColor='#EFA824' />
          <Stop offset={1} stopColor='#EE9B00' />
        </LinearGradient>
        <LinearGradient id='b' x1={15.675} x2={27.363} y1={18.012} y2={28.875} gradientUnits='userSpaceOnUse'>
          <Stop stopColor='#FFD760' />
          <Stop offset={0.381} stopColor='#FFE9A6' />
          <Stop offset={1} stopColor='#F2CB55' />
        </LinearGradient>
        <LinearGradient id='c' x1={18.288} x2={26.4} y1={16.5} y2={28.875} gradientUnits='userSpaceOnUse'>
          <Stop stopColor='#F5DBAA' />
          <Stop offset={1} stopColor='#E1A942' />
        </LinearGradient>
        <LinearGradient id='d' x1={17.14} x2={17.14} y1={27.384} y2={38.919} gradientUnits='userSpaceOnUse'>
          <Stop stopColor='#FFD3C2' />
          <Stop offset={1} stopColor='#FAAA9A' />
        </LinearGradient>
        <LinearGradient id='e' x1={27.512} x2={27.512} y1={17.035} y2={5.5} gradientUnits='userSpaceOnUse'>
          <Stop stopColor='#FFD3C2' />
          <Stop offset={1} stopColor='#FAAA9A' />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

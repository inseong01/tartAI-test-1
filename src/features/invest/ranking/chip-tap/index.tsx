import RatioChipTap from './ratio';
import TradeTermChipTap from './trade-term';

import { Dispatch, SetStateAction } from 'react';

interface ChipTapProps {
  categoryTap: 'ratio' | 'tradeTerm';
  chipTap: string;
  setChipTap: Dispatch<SetStateAction<string>>;
}

export default function ChipTap({ chipTap, categoryTap, setChipTap }: ChipTapProps) {
  if (categoryTap === 'ratio') {
    return <RatioChipTap chipTap={chipTap} setChipTap={setChipTap} />;
  }

  return <TradeTermChipTap chipTap={chipTap} setChipTap={setChipTap} />;
}

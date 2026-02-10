import { CategoryTapType } from '../constants/types';

import { useState } from 'react';

export function useMagageTap() {
  const [categoryTap, setCategoryTapState] = useState<CategoryTapType>('ratio');
  const [chipTap, setChipTap] = useState('year');

  const setCategoryTap = (tap: CategoryTapType) => {
    setCategoryTapState(tap);
    setChipTap(tap === 'ratio' ? 'year' : 'recent');
  };

  return { categoryTap, setCategoryTap, chipTap, setChipTap };
}

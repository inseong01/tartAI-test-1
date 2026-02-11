import { CategoryTapType, InvestmentData } from '../constants/types';
import { sortByRatioDesc, sortByTradeTermAsc } from '../utils/sort-data';

export function useInvestmentData(categoryTap: CategoryTapType, chipTap: string, DATA: InvestmentData[]) {
  const getInvestData = () => {
    if (categoryTap === 'ratio') {
      return sortByRatioDesc(chipTap, DATA);
    }

    if (categoryTap === 'tradeTerm') {
      return sortByTradeTermAsc(chipTap, DATA);
    }

    return DATA;
  };

  return {
    data: getInvestData().slice(0, 10),
  };
}

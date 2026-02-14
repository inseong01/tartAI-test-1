import { ONE_YEAR_MS, SIX_MONTH, YEAR } from '../constants/const';
import { InvestmentData } from '../constants/types';

export function sortByRatioDesc(chipTap: string, DATA: InvestmentData[]) {
  if (chipTap === 'year') {
    const now = new Date();
    return DATA.filter((data) => {
      const soldDate = new Date(data.soldAt);
      const soldMs = now.getTime() - soldDate.getTime();
      return soldMs <= ONE_YEAR_MS;
    }).sort((a, b) => b.ratio - a.ratio);
  }

  return DATA.sort((a, b) => b.ratio - a.ratio);
}

export function sortByTradeTermAsc(chipTap: string, DATA: InvestmentData[]) {
  if (chipTap === 'recent') {
    return DATA.sort((a, b) => a.trade_term_date - b.trade_term_date);
  }

  if (chipTap === 'sixMonth') {
    return DATA.filter((data) => data.trade_term_date >= SIX_MONTH).sort(
      (a, b) => a.trade_term_date - b.trade_term_date,
    );
  }

  return DATA.filter((data) => data.trade_term_date >= YEAR).sort((a, b) => a.trade_term_date - b.trade_term_date);
}

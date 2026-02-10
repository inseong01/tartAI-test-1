import { CategoryTapType } from '../constants/types';

export function getCategoryValue(categoryTap: CategoryTapType, ratio: number, trade_term_date: number) {
  if (categoryTap === 'ratio') {
    const ratioNumber = Math.round(ratio * 100 * 100) / 100;
    return `+${ratioNumber}%`;
  }
  return `${trade_term_date}일`;
}

export type CategoryTapType = 'ratio' | 'tradeTerm';

export interface InvestmentData {
  id: number;
  uri: string;
  title: string;
  ratio: number;
  trade_term_date: number;
  soldAt: string;
}

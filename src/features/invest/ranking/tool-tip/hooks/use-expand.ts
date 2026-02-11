import { BottomSheetDispatchContext } from '@/src/provider/bottom-sheet/context';
import { useContext } from 'react';

export function useExpandToolTip() {
  const dispatch = useContext(BottomSheetDispatchContext);

  const expandSheet = () => {
    dispatch.open({
      title: '조각투자 매각 상품 랭킹',
      description: `- \u2019연 환산 수익률\u2018은 매각까지 소요된 기간을 1년으로 환산한 수익률입니다.\n- \u2019빠른 매각 순\u2018에서 상품이 매각되기까지 기간을 볼 수 있어요. 상환 기간 별 투자 상품을 확인해 보세요.`,
    });
  };

  return { expandSheet };
}

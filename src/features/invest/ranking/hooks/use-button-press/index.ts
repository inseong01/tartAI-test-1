import { useButtonPress } from './use-button-press';
import { useExpandAnimate } from './use-expand-animate';

export function useMoreButtonPress() {
  const { buttonValue, setButtonState } = useButtonPress();
  const { animatedRef, tabHeight, expandHeight } = useExpandAnimate();

  const pressButton = () => {
    expandHeight();
    setButtonState();
  };

  return { buttonValue, animatedRef, tabHeight, pressButton };
}

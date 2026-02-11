import { useState } from 'react';

export function useButtonPress() {
  const [isClicked, setClick] = useState(false);

  const setButtonState = () => {
    setClick((prev) => !prev);
  };

  const buttonValue = isClicked ? '접기' : '펼치기';

  return { buttonValue, setButtonState };
}

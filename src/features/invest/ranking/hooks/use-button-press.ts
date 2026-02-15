import { useState } from 'react';

export function useButtonPress() {
  const [isPressed, setPressState] = useState(false);

  const pressButton = () => {
    setPressState((prev) => !prev);
  };

  return { isPressed, pressButton };
}

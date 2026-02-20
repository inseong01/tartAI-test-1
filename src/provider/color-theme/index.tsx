import React, { ReactNode, useEffect, useState } from 'react';
import { Appearance, AppState, AppStateStatus, ColorSchemeName } from 'react-native';
import { ThemeContext } from './context';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [scheme, setScheme] = useState<ColorSchemeName>(Appearance.getColorScheme());

  useEffect(() => {
    const checkTheme = () => {
      setScheme(Appearance.getColorScheme());
    };

    const appearanceEvent = Appearance.addChangeListener(checkTheme);

    const appStateSub = AppState.addEventListener('change', (status: AppStateStatus) => {
      if (status === 'active') checkTheme();
    });

    return () => {
      appearanceEvent.remove();
      appStateSub.remove();
    };
  }, []);

  return <ThemeContext.Provider value={{ scheme }}>{children}</ThemeContext.Provider>;
};

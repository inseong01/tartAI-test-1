import { createContext } from 'react';
import { Appearance } from 'react-native';
import { ThemeContextType } from './const';

export const ThemeContext = createContext<ThemeContextType>({ scheme: Appearance.getColorScheme() });

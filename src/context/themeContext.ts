import {Colors} from '@constants/colors';
import {ThemeContextType} from '@types';
import {createContext} from 'react';

export const ThemeContext = createContext<ThemeContextType>({
  colors: Colors.light,
  toggleTheme: () => {},
});

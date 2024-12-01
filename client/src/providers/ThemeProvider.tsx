import {Colors} from '@constants/colors';
import {useAsyncStorage} from '@hooks/useAsyncStorage';
import {useDeviceTheme} from '@hooks/useDeviceTheme';
import {ThemeProvider as RestyleProvider} from '@shopify/restyle';
import {theme as restyleTheme} from '@styles/theme';
import {TChild, TColorPalettes} from '@types';
import React from 'react';
import {ThemeContext} from '../context/index';

const ThemeProvider = ({children}: TChild) => {
  const deviceTheme = useDeviceTheme();
  const {setValue, storedValue} = useAsyncStorage('theme', '');

  const currentTheme = storedValue || deviceTheme;

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setValue('theme', newTheme);
    return newTheme;
  };

  const colors = storedValue === 'light' ? Colors.light : Colors.dark;
  const combinedTheme = {
    ...restyleTheme,
    colors,
  };

  return (
    <RestyleProvider theme={combinedTheme}>
      <ThemeContext.Provider
        value={{
          colors,
          toggleTheme,
          theme: storedValue as keyof TColorPalettes,
        }}>
        {children}
      </ThemeContext.Provider>
    </RestyleProvider>
  );
};

export {ThemeProvider};

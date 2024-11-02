import LottieView from 'lottie-react-native';
import React, {useContext, useMemo} from 'react';
import {ThemeContext} from '../../context';
import {styles} from './ActivityIndicator.useStyles';
interface IActivityIndicator {
  isLoading?: boolean;
  size?: number;
}

const ActivityIndicator = ({
  isLoading = true,
  size = 60,
}: IActivityIndicator) => {
  const {theme} = useContext(ThemeContext);
  const activePath = useMemo(
    () =>
      theme === 'dark'
        ? require('@assets/animations/LightLoader.json')
        : require('@assets/animations/DarkLoader.json'),
    [theme],
  );
  return (
    isLoading && (
      <LottieView
        source={activePath}
        style={[styles.loader, {height: size, width: size}]}
        autoPlay
        loop
      />
    )
  );
};

export {ActivityIndicator};

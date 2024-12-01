import MoonIcon from '@assets/icons/svg/moon.svg';
import SunIcon from '@assets/icons/svg/sun.svg';
import {useTheme} from '@hooks/useTheme';
import React, {useEffect, useRef} from 'react';
import {Pressable, ViewStyle} from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {styles} from './ThemeSwitcher.useStyles';

interface ThemeSwitchProps {
  value: {value: number};
  onPress: () => void;
  onFinish?: () => void;
  style?: ViewStyle;
  duration?: number;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({
  style,
  value,
  onPress,
  onFinish,
  duration = 400,
}) => {
  const {colors} = useTheme();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const trackColors = {on: colors.white, off: colors.black};
  const height = useSharedValue(0);
  const width = useSharedValue(0);
  const derivedValue = useDerivedValue(() => {
    return value.value;
  });
  const trackAnimatedStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      derivedValue.value,
      [0, 1],
      [trackColors.on, trackColors.off],
    );
    const borderColor = interpolateColor(
      derivedValue.value,
      [0, 1],
      [trackColors.off, trackColors.on],
    );
    const colorValue = withTiming(color, {duration: duration / 1.5});
    const borderValue = withTiming(borderColor, {duration});

    return {
      backgroundColor: colorValue,
      borderColor: borderValue,
      borderRadius: height.value / 2,
    };
  });

  const thumbAnimatedStyle = useAnimatedStyle(() => {
    const moveValue = interpolate(
      Number(derivedValue.value),
      [0, 1],
      [0, width.value - height.value],
    );
    const translateValue = withTiming(moveValue, {duration});

    return {
      transform: [{translateX: translateValue}],
      borderRadius: height.value / 2,
    };
  });

  const handlePress = () => {
    onPress(); // Call the passed onPress
    if (onFinish) {
      timeoutRef.current = setTimeout(() => {
        onFinish(); // Call onFinish after a short delay (e.g., the duration of the animation / 2)
      }, duration / 2);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current); // Clear the timeout
      }
    };
  }, []);

  return (
    <Pressable onPress={handlePress}>
      <Animated.View
        onLayout={e => {
          height.value = e.nativeEvent.layout.height;
          width.value = e.nativeEvent.layout.width;
        }}
        style={[styles.track, style, trackAnimatedStyle]}>
        <Animated.View style={[styles.thumb, thumbAnimatedStyle]}>
          {derivedValue.value === 1 ? (
            <MoonIcon {...styles.icon} />
          ) : (
            <SunIcon {...styles.icon} />
          )}
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
};
export default ThemeSwitch;

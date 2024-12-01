import { BoxProps, VariantProps } from '@shopify/restyle';
import { ButtonContainer, Text, TTheme } from '@styles/theme';
import React from 'react';
import { TouchableOpacity } from 'react-native';

type Props = BoxProps<TTheme> &
  VariantProps<TTheme, 'boxVariants'> &
  VariantProps<TTheme, 'textVariants', 'textVariants'> & {
    label: string;
    onPress: () => void;
    textColor?: keyof TTheme['colors'];
  };

const Button = ({
  onPress,
  label,
  textVariants,
  textColor = 'textPrimary',
  variant = 'ButtonContainer',
  ...rest
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ButtonContainer
        variant={variant}
        justifyContent="center"
        alignItems="center"
        {...rest}>
        <Text variant={textVariants} color={textColor}>
          {label}
        </Text>
      </ButtonContainer>
    </TouchableOpacity>
  );
};

export default Button;

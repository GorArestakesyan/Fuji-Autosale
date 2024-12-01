import BackIcon from '@assets/icons/svg/arrowLeft.svg';
import {useTheme} from '@hooks/useTheme';
import {useNavigation} from '@react-navigation/native';
import {Box} from '@styles/theme';
import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';

interface IHeader {
  style?: ViewStyle;
}

const Header = ({style}: IHeader) => {
  const {goBack} = useNavigation();
  const {colors} = useTheme();
  return (
    <Box style={style} backgroundColor={'primary'}>
      <TouchableOpacity onPress={goBack}>
        <Box
          m={'m'}
          alignItems={'center'}
          justifyContent={'flex-start'}
          flexDirection={'row'}>
          <BackIcon color={colors.textPrimary} />
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

export {Header};

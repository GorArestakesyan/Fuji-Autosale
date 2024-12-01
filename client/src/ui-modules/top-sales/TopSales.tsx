import {Box, Text} from '@styles/theme';
import {TOP_SALES} from '@utils/mocks/homeSliderImages';
import React, {useRef, useState} from 'react';
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {styles} from './TopSales.useStyles';

const {width} = Dimensions.get('window');

interface ITopSales {
  label?: string;
}

export const TopSales = ({label = 'TOP SALES'}: ITopSales) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    /** Calculate the active index based on scroll position */
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(slideIndex);
  };

  return (
    <Box p={'m'} alignItems={'flex-start'}>
      <Text variant={'text20'} py={'m'} color={'textPrimary'}>
        {label}
      </Text>
      <Box
        height={200}
        alignSelf={'center'}
        borderWidth={3}
        borderColor={'info'}
        borderRadius={'s'}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          onScroll={handleScroll}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}>
          {TOP_SALES.map((image, index) => (
            <FastImage
              key={index}
              source={{uri: image, cache: 'immutable', priority: 'high'}}
              resizeMode={FastImage.resizeMode.cover}
              style={styles.image}
            />
          ))}
        </ScrollView>

        {/* Dots indicator */}
        <Box
          position={'absolute'}
          flexDirection={'row'}
          justifyContent={'center'}
          bottom={10}
          width={'100%'}>
          {TOP_SALES.map((_, index) => (
            <Box
              height={8}
              width={8}
              borderRadius={'s'}
              backgroundColor={'primary'}
              marginHorizontal={'xs'}
              key={index}
              style={{opacity: index === activeIndex ? 1 : 0.3}}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

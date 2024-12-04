import { Box, Text } from '@styles/theme';
import { TVehicle } from '@types';
import React from 'react';
import { Review } from '../components/Review';

interface IReviews {
  reviews: TVehicle['reviews'];
}

const Reviews = ({ reviews }: IReviews) => {
  return (
    <Box
      backgroundColor={'shadow'}
      borderTopColor={'textPrimary'}
      borderTopWidth={1}
      marginVertical={'m'}>
      <Text variant={'text16SemiBold'} mt={'m'} color={'textPrimary'}>
        Reviews
      </Text>
      {reviews.map(reivew => (
        <Review review={reivew} key={reivew.reviewerEmail} />
      ))}
    </Box>
  );
};

export { Reviews };

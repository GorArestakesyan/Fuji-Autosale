import {Box, Text} from '@styles/theme';
import {TReview} from '@types';
import React from 'react';

interface IReview {
  review: TReview;
}

const Review = ({review}: IReview) => {
  const reviewDate = new Date(review.date).toLocaleDateString();
  return (
    <Box flexDirection={'column'} marginVertical={'s'}>
      <Text variant={'text16Bold'} color={'textPrimary'}>
        {review.reviewerName}
      </Text>
      <Box flexDirection={'row'} justifyContent={'space-between'}>
        <Text color={'textPrimary'} variant={'text14System'}>
          {review.comment}
        </Text>
        <Text color={'textPrimary'} variant={'text14System'}>
          {reviewDate}
        </Text>
      </Box>
    </Box>
  );
};

export {Review};

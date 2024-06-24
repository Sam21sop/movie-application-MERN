import React from 'react';

const Review = ({ review }) => {
  return (
    <div className="border-t border-gray-300 pt-2 mt-2">
      <p>{review.text}</p>
    </div>
  );
};

export default Review;

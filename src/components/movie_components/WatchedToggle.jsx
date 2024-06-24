import React from 'react';

const WatchedToggle = ({ watched, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`px-4 py-2 rounded ${watched ? 'bg-green-500' : 'bg-red-500'} text-white`}
    >
      {watched ? 'Watched' : 'Unwatched'}
    </button>
  );
};

export default WatchedToggle;

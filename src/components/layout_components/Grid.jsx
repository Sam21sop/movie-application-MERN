import React from 'react';

const Grid = ({ children, cols = 1, smCols = 2}) => {
  return (
    <div className={`grid grid-cols-${cols} sm:grid-cols-${smCols} gap-4`}>
      {children}
    </div>
  );
};

export default Grid;

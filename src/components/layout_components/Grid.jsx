import React from 'react';

const Grid = ({ children, smCols=4}) => {
  return (
    <div className={`grid w-full gap-4 px-6 grid-cols-${smCols}`}>
      {children}
    </div>
  );
};

export default Grid;

import React from 'react';

const Grid = ({ children, smCols=4}) => {
  return (
    <div className={`grid sm:grid-cols-${smCols} gap-4`}>
      {children}
    </div>
  );
};

export default Grid;

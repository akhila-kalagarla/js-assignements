// 20. Implement a React component that displays a list of items with virtualization.

import React from 'react';
import { FixedSizeList as List } from 'react-window';

const VirtualizedList = ({ items, itemHeight = 35, height = 300 }) => {
  const renderRow = ({ index, style }) => (
    <div style={style} key={index}>
      {items[index]}
    </div>
  );

  return (
    <List
      height={height}
      itemCount={items.length}
      itemSize={itemHeight}
      width="100%"
    >
      {renderRow}
    </List>
  );
};

export default VirtualizedList;
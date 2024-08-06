// 15. Create a React component that uses React Memo for performance optimization.

import React, { useState, memo } from 'react';

const ListItem = memo(({ item }) => {
  console.log(`Rendering ${item}`);
  return <li>{item}</li>;
});

const MemoizedList = ({ items }) => {
  const [filterText, setFilterText] = useState('');

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Filter"
        value={filterText}
        onChange={e => setFilterText(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default MemoizedList;

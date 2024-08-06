// 14. Implement a React component that displays a list of items with filtering and sorting.

import React, { useState } from 'react';

const FilterSortList = ({ items }) => {
  const [filterText, setFilterText] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(filterText.toLowerCase())
  );

  const sortedItems = filteredItems.sort((a, b) =>
    sortOrder === 'asc' ? a.localeCompare(b) : b.localeCompare(a)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Filter"
        value={filterText}
        onChange={e => setFilterText(e.target.value)}
      />
      <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
        Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}
      </button>
      <ul>
        {sortedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterSortList;

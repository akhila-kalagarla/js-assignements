// 1. Write a React component that displays a list of items from an array.

import React from 'react';

const List = ({ items }) => {
  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
const App = () => {
  const itemsArray = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <div>
      <List items={itemsArray} />
    </div>
  );
};
export default App;

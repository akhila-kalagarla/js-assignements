// 11. Implement a React component that displays a list of items with infinite scrolling.

import React, { useState, useEffect } from 'react';

const InfiniteScrollList = ({ fetchMoreItems }) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadItems = async () => {
      const newItems = await fetchMoreItems(page);
      setItems((prevItems) => [...prevItems, ...newItems]);
    };

    loadItems();
  }, [page, fetchMoreItems]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
      setPage((prevPage) => prevPage + 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default InfiniteScrollList;

// 7. Write a React component that uses React Hooks to manage state.

import React, { useState } from 'react';

const HookExample = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text}</p>
    </div>
  );
};

export default HookExample;

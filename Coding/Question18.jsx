// 18. Create a React component that uses React Ref for DOM manipulation.

import React, { useRef } from 'react';

const RefComponent = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default RefComponent;

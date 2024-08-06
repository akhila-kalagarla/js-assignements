// 10. Write a React component that uses React Context for state management.

import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, setState] = useState('Initial State');

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

const DisplayComponent = () => {
  const { state } = useContext(AppContext);
  return <p>{state}</p>;
};

const UpdateComponent = () => {
  const { setState } = useContext(AppContext);
  return <button onClick={() => setState('Updated State')}>Update</button>;
};

const App = () => (
  <AppProvider>
    <DisplayComponent />
    <UpdateComponent />
  </AppProvider>
);

export default App;

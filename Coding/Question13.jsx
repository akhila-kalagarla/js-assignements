// 13. Write a React component that handles errors and exceptions.

import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}

const FaultyComponent = () => {
  throw new Error('An error occurred!');
};

const App = () => (
  <ErrorBoundary>
    <FaultyComponent />
  </ErrorBoundary>
);

export default App;

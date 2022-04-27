// Import React and React Dom libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// Create a react component
const App = () => {
  return <div>hi</div>;
};

// Take the react component and show it on the screen
// below is an earlier version of React method
// ReactDOM.render(<App />, document.querySelector('#root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

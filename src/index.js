// Import React and React Dom libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import CommentDetail from './CommentDetail';

// Create a react component
const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail />
    </div>
  );
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

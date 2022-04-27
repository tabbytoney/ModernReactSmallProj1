// Import React and React Dom libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import CommentDetail from './CommentDetail';
import faker from '@faker-js/faker';

// Create a react component
const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail imageSrc={faker.image.avatar()} author='Bob' timeAgo='Today at 4:00PM' commentText='Nice blog.' />
      <CommentDetail
        imageSrc={faker.image.avatar()}
        author='Jim'
        timeAgo='Today at 2:00AM'
        commentText='This is great!'
      />
      <CommentDetail
        imageSrc={faker.image.avatar()}
        author='Mary'
        timeAgo='Yesterday at 8:00PM'
        commentText='Good job!'
      />
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

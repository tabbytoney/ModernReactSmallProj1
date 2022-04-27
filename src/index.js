// Import React and React Dom libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import faker from '@faker-js/faker';

// Create a react component
const App = () => {
  return (
    <div className='ui container comments'>
      <div className='comment'>
        <a href='/' className='avatar'>
          <img alt='avatar' src={faker.image.avatar()} />
        </a>
        <div className='content'>
          <a href='/' className='author'>
            Bob
          </a>
          <div className='metadata'>
            <span className='date'>Today at 6:00PM</span>
            <div className='text'>Nice blog post</div>
          </div>
        </div>
      </div>
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

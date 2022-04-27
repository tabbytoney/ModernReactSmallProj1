import React from 'react';
import faker from '@faker-js/faker';

// This props is prety  much an object with the properties/values inside this component,
// such as author
const CommentDetail = (props) => {
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img alt='avatar' src={faker.image.avatar()} />
      </a>
      <div className='content'>
        <a href='/' className='author'>
          {props.author}
        </a>
        <div className='metadata'>
          <span className='date'>Today at 6:00PM</span>
          <div className='text'>Nice blog post</div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;

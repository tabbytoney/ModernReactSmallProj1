import React from 'react';

// This props is prety  much an object with the
// properties/values passed from the parent (App component) to child,
// such as author. Kinda like the parent has the key, the child has the value
const CommentDetail = (props) => {
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img alt='avatar' src={props.imageSrc} />
      </a>
      <div className='content'>
        <a href='/' className='author'>
          {props.author}
        </a>
        <div className='metadata'>
          <span className='date'>{props.timeAgo}</span>
          <div className='text'>{props.commentText}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;

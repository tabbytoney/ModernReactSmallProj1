import React from 'react';

const ApprovalCard = (props) => {
  // content > {props.children} gets the configuration from the child component, CommentDetail, and puts CommentDetail inside of the ApprovalCard
  return (
    <div className='ui card'>
      <div className='content'>{props.children}</div>
      <div className='extra content'>
        <div className='ui two buttons'>
          <div className='ui basic green button'>Approve</div>
          <div className='ui basic red button'>Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;

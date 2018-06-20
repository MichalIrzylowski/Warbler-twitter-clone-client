import React from 'react';
import UserAside from './UserAside';
import MessageList from '../containers/MessageList';

const MessageTimeline = props => {
  return (
      <div className='row'>
        <UserAside profileImageUrl={props.profileImgUrl} username={props.username} />
        <MessageList />
      </div>
    );
};

export default MessageTimeline;
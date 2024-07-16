import React from 'react';
import './Post.css';

const Post = () => {
  return (
    <div className="post">
      <div className="post-header">
        <div className="profile-icon" />
        <div className="username-and-timestamp" />
      </div>
      <div className="post-image" />
    </div>
  );
};

export default Post;


/* import React from 'react';
import './Post.css';

const Post = ({ setShowChat }) => {
  return (
    <div className="post">
      <div className="post-header">
        <div className="profile-icon" />
        <div className="username-and-timestamp" />
      </div>
      <div className="post-image" />
      
    </div>
  );
};

export default Post; */
import React from 'react';

const Post = React.memo(({ posts }) => (
    <div>
                <b>{posts.title}</b>
                <p>{posts.body}</p>
    </div>

));

export default Post;
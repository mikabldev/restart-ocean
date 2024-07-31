import React from 'react';

const Post = ({ title, content }) => {
    return (
        <div className="card my-3">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
            </div>
        </div>
    );
};

export default Post;

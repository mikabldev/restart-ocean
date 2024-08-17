import React, { useState } from 'react';
import PostList from '../components/Foro/PostList';
import PostForm from '../components/Foro/PostForm';
import '../components/Foro/Foro.css';
import LSidebar from './Left-Sidebar/LSidebar.js';

function LogicaForo() {
    const [posts, setPosts] = useState([]);

    const addPost = (post) => {
        setPosts([
            { ...post, id: Date.now(), comments: [] },
            ...posts,
        ]);
    };

    const addComment = (postId, comment) => {
        setPosts(posts.map(post =>
            post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
        ));
    };

    const editPost = (postId, newTitle, newContent) => {
        setPosts(posts.map(post =>
            post.id === postId ? { ...post, title: newTitle, content: newContent } : post
        ));
    };

    const deletePost = (postId) => {
        setPosts(posts.filter(post => post.id !== postId));
    };

    return (
        <div className="App">
            <LSidebar />
            <div className="content">
                <PostForm addPost={addPost} />
                <PostList posts={posts} addComment={addComment} editPost={editPost} deletePost={deletePost} />
            </div>
        </div>
    );
};

export default LogicaForo;
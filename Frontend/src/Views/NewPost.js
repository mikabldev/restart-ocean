import { useState } from "react";
import NewPostForm from "../components/Foro/NewPost/NewPostForm";
import PostList from "../components/Foro/PostList/PostList";
import LSidebar from "../components/Foro/Left-Sidebar/LSidebar";

function NewPost() {
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
        <>
            <div className='newpostcontainer'>
                <div className='LSidebar'>
                    <LSidebar />
                </div>

                <div className='newpostform'>
                    <div className="post-form">
                        <NewPostForm addPost={addPost} />
                        <PostList
                            posts={posts}
                            addComment={addComment}
                            editPost={editPost}
                            deletePost={deletePost} />
                    </div>

                </div>
            </div>
        </>
    );
};


export default NewPost;
import { useState } from "react";
import NewPostForm from "../components/Foro/NewPost/NewPostForm";
import LSidebar from "../components/Foro/Left-Sidebar/LSidebar";
import "../components/Foro/NewPost/NewPost.css"

function NewPost() {
    const [posts, setPosts] = useState([]);

    const addPost = (post) => {
        setPosts([
            { ...post, id: Date.now(), comments: [] },
            ...posts,
        ]);
    };

    return (
        <>
            <div className='newpostcontainer'>
                <div className='LSidebar'>
                    <LSidebar />
                </div>

                <div className='newpostform'>
                    <NewPostForm addPost={addPost} />
                </div>

            </div>
        </>
    );
};


export default NewPost;
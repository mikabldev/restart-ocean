import { useState } from "react";
import NewPostForm from "../components/Foro/NewPost/NewPostForm";
import LSidebar from "../components/Foro/Left-Sidebar/LSidebar";
import "../components/Foro/NewPost/NewPost.css"

function NewPost() {
    return (

        <div className='newpostcontainer'>
            <div className='LSidebar'>
                <LSidebar />
            </div>
            <div className='newpostform'>
                <NewPostForm />
            </div>

        </div>

    );
};


export default NewPost;
import React, { useState } from "react";
import LSidebar from "../components/Foro/Left-Sidebar/LSidebar";
import PostList from "../components/Foro/PostList";
import RSidebar from "../components/Foro/Right-Sidebar/RSidebar";
import PostForm from "../components/Foro/PostForm"; // Asegúrate de importar PostForm si es un componente separado
import styles from "../../src/components/Foro/Foro.module.css"

function Foro() {
  // Aquí comienza la lógica del post list más el contenedor donde comenzar a escribir un post

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
      <div className={styles.foroContainer}>
        <div>
          <div className={styles.LSidebar}>
            <LSidebar />
          </div>
          <div className={styles.PostList}>
            <PostForm addPost={addPost} />
            <PostList
              posts={posts}
              addComment={addComment}
              editPost={editPost}
              deletePost={deletePost}
            />
          </div>
          <div className={styles.RSidebar}>
            <RSidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Foro;

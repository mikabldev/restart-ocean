import React from "react";
import LSidebar from "../components/Foro/Left-Sidebar/LSidebar";
import PostList from "../components/Foro/PostList/PostList";
import RSidebar from "../components/Foro/Right-Sidebar/RSidebar";
import styles from "../../src/components/Foro/Foro.module.css";


function Foro() {
  return (
    <>
      <div className={styles.foroContainer}>
          <div className={styles.LSidebar}>
            <LSidebar />
          </div>
          <div className={styles.PostList}>
            <PostList/>
          </div>
          <div className={styles.RSidebar}>
            <RSidebar />
          </div>
        </div>
    </>
  );
}

export default Foro

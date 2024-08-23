import React from "react";
import LSidebar from "../components/Foro/Left-Sidebar/LSidebar"
//import PostList from "../components/Foro/PostList"
//import RSidebar from "../components/Foro/Right-Sidebar/RSidebar";

function Foro() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
      <LSidebar />
    </div>
  );
};

export default Foro;
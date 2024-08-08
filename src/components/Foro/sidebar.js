import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const topics = ['React', 'JavaScript', 'CSS', 'HTML', 'Node.js', 'APIs'];

  return (
    <div className="sidebar">
      <h2>Temas de Interés</h2>
      <ul>
        {topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;



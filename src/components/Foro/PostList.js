// src/components/PostList.js
import React, { useState, useEffect } from 'react';

const PostList = ({ posts, addComment, editPost, deletePost }) => {
  const [comment, setComment] = useState('');
  const [editingPostId, setEditingPostId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  const handleCommentChange = (e) => setComment(e.target.value);

  const handleCommentSubmit = (postId) => {
    if (comment.trim()) {
      addComment(postId, comment);
      setComment('');
    }
  };

  const handleEditTitleChange = (e) => setEditTitle(e.target.value);

  const handleEditContentChange = (e) => setEditContent(e.target.value);

  const handleEditSubmit = (postId) => {
    if (editTitle.trim() && editContent.trim()) {
      editPost(postId, editTitle, editContent);
      setEditingPostId(null);
      setEditTitle('');
      setEditContent('');
    }
  };

  useEffect(() => {
    if (editingPostId !== null) {
      const postToEdit = posts.find(post => post.id === editingPostId);
      if (postToEdit) {
        setEditTitle(postToEdit.title);
        setEditContent(postToEdit.content);
      }
    }
  }, [editingPostId, posts]);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {editingPostId === post.id ? (
              <div>
                <input
                  type="text"
                  value={editTitle}
                  onChange={handleEditTitleChange}
                  placeholder="Nuevo título"
                />
                <textarea
                  value={editContent}
                  onChange={handleEditContentChange}
                  placeholder="Nuevo contenido"
                />
                <button onClick={() => handleEditSubmit(post.id)}>Guardar</button>
                <button onClick={() => setEditingPostId(null)}>Cancelar</button>
              </div>
            ) : (
              <div>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <span className="post-author">Autor: {post.author}</span>
                <button onClick={() => setEditingPostId(post.id)}>Editar</button>
                <button onClick={() => deletePost(post.id)}>Eliminar</button>
              </div>
            )}
            <div className="comments-section">
              <h4>Comentarios</h4>
              {post.comments && post.comments.length > 0 ? (
                <ul>
                  {post.comments.map((comment, idx) => (
                    <li key={idx}>{comment}</li>
                  ))}
                </ul>
              ) : (
                <p>No hay comentarios aún.</p>
              )}
              <textarea
                value={comment}
                onChange={handleCommentChange}
                placeholder="Escribe un comentario..."
              />
              <button onClick={() => handleCommentSubmit(post.id)}>Añadir Comentario</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;

import React, { useState, useEffect } from 'react';
import './PostList.css'; // Archivo CSS para estilos específicos de PostList

const PostList = ({ posts, addComment, editPost, deletePost }) => {
  const [comment, setComment] = useState('');
  const [editingPostId, setEditingPostId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4); // Número de posts por página// 

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

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
    <div className="post-list">
      <h1 className="post-list-title">Posts</h1>
      <ul>
        {currentPosts.map((post) => (
          <li key={post.id} className="post-item">
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
                {post.imageUrl && <img src={post.imageUrl} alt={post.title} className="post-image" />}
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
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  );
};

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button onClick={() => paginate(number)} className='page-link'>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PostList;

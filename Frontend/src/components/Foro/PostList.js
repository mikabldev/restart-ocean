import React, { useState, useEffect } from 'react';
import './PostList.css'; 

const PostList = ({ posts = [], addComment, editPost, deletePost, editComment, deleteComment }) => {
  const [comment, setComment] = useState('');
  const [editingPostId, setEditingPostId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4); // Número de posts por página
  const [editingCommentIndex, setEditingCommentIndex] = useState(null);
  const [editCommentContent, setEditCommentContent] = useState('');

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

  const handleDelete = (postId) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este post?")) {
      deletePost(postId);
    }
  };

  const handleEditCommentSubmit = (postId, commentIndex) => {
    if (editCommentContent.trim()) {
      editComment(postId, commentIndex, editCommentContent);
      setEditingCommentIndex(null);
      setEditCommentContent('');
    }
  };

  const handleDeleteComment = (postId, commentIndex) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este comentario?")) {
      deleteComment(postId, commentIndex);
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
          <li key={post.id} className={`post-item ${editingPostId === post.id ? 'editing' : ''}`}>
            {editingPostId === post.id ? (
              <div className="edit-form">
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
              <div className="post-content">
                {post.imageUrl && <img src={post.imageUrl} alt={post.title} className="post-image" />}
                <h3>{post.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: post.content }} /> {/* Renderiza contenido HTML */}
                <span className="post-author"> {post.author}</span>
                <button onClick={() => setEditingPostId(post.id)}>Editar</button>
                <button onClick={() => handleDelete(post.id)}>Eliminar</button>
              </div>
            )}
            <div className="comments-section">
              <h4>Comentarios</h4>
              {post.comments && post.comments.length > 0 ? (
                <ul>
                  {post.comments.map((comment, idx) => (
                    <li key={idx}>
                      {editingCommentIndex === idx ? (
                        <div>
                          <textarea
                            value={editCommentContent}
                            onChange={(e) => setEditCommentContent(e.target.value)}
                            placeholder="Edita tu comentario..."
                          />
                          <button onClick={() => handleEditCommentSubmit(post.id, idx)}>Guardar</button>
                          <button onClick={() => setEditingCommentIndex(null)}>Cancelar</button>
                        </div>
                      ) : (
                        <div>
                          {comment}
                          <button onClick={() => {
                            setEditingCommentIndex(idx);
                            setEditCommentContent(comment);
                          }}>Editar</button>
                          <button onClick={() => handleDeleteComment(post.id, idx)}>Eliminar</button>
                        </div>
                      )}
                    </li>
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
          <li key={number} className={`page-item ${number === Math.ceil(totalPosts / postsPerPage) ? 'active' : ''}`}>
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


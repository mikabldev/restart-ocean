import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import './PostList.css';

const PostList = ({ posts = [], editPost, deletePost }) => {
  const [editingPostId, setEditingPostId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4); // Número de posts por página

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

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
    Swal.fire({
      title: '¿Estás seguro de que deseas eliminar este post?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        deletePost(postId);
      }
    });
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
      <h1 className="post-list-title">Posts Recientes</h1>
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
              // Contenido del Post
              <div className="post-content">
                {post.imageUrl && <img src={post.imageUrl} alt={post.title} className="post-image" />}
                <h3>{post.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: post.content }} /> {/* Renderiza contenido HTML */}
                <span className="post-author"> {post.author}</span>
                <button onClick={() => setEditingPostId(post.id)}>Editar</button>
                <button onClick={() => handleDelete(post.id)}>Eliminar</button>
              </div>
            )}
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


import React, { useState, useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Importar los estilos de Quill
import './PostForm.css';

const PostForm = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [showEditor, setShowEditor] = useState(false); // Controlar cuándo mostrar el editor
  const quillRef = useRef(null);
  const quillInstanceRef = useRef(null);

  useEffect(() => {
    if (showEditor && !quillInstanceRef.current) {
      quillInstanceRef.current = new Quill(quillRef.current, {
        theme: 'snow',
        placeholder: 'Escribe el contenido aquí...',
      });

      quillInstanceRef.current.on('text-change', () => {
        setContent(quillInstanceRef.current.root.innerHTML);
      });
    }
  }, [showEditor]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content && author) {
      addPost({ title, content, author, imageUrl });
      setTitle('');
      setContent('');
      setAuthor('');
      setImageUrl('');
      // setShowEditor(false); // No restablecer showEditor a false
    }
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <h2>Nuevo Post</h2>
      <div>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">Contenido:</label>
        {showEditor ? (
          <div className="editor-container">
            <div ref={quillRef} />
          </div>
        ) : (
          <textarea
            id="content"
            placeholder="Haz clic para agregar contenido..."
            onClick={() => setShowEditor(true)} // Mostrar editor al hacer clic
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        )}
      </div>
      <div>
        <label htmlFor="author">Autor:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="imageUrl">URL de la Imagen:</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <button type="submit">Añadir Post</button>
    </form>
  );
};

export default PostForm;

import { useState } from 'react';
import Swal from 'sweetalert2';

const CommentS = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            comments: [],
        },
        // Puedes agregar más posts aquí
    ]);
    const [comment, setComment] = useState('');
    const [editingCommentIndex, setEditingCommentIndex] = useState(null);
    const [editCommentContent, setEditCommentContent] = useState('');

    const handleCommentChange = (e) => setComment(e.target.value);

    const addComment = (postId, newComment) => {
        setPosts(posts.map(post =>
            post.id === postId ? { ...post, comments: [...post.comments, newComment] } : post
        ));
    };

    const handleCommentSubmit = (postId) => {
        if (comment.trim()) {
            addComment(postId, comment);
            setComment('');
        }
    };

    const handleEditCommentSubmit = (postId, commentIndex) => {
        if (editCommentContent.trim()) {
            setPosts(posts.map(post =>
                post.id === postId ? {
                    ...post,
                    comments: post.comments.map((c, idx) =>
                        idx === commentIndex ? editCommentContent : c
                    )
                } : post
            ));
            setEditingCommentIndex(null);
            setEditCommentContent('');
        }
    };

    const handleDeleteComment = (postId, commentIndex) => {
        Swal.fire({
            title: '¿Estás seguro de que deseas eliminar este comentario?',
            text: 'Esta acción no se puede deshacer.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                setPosts(posts.map(post =>
                    post.id === postId ? {
                        ...post,
                        comments: post.comments.filter((_, idx) => idx !== commentIndex)
                    } : post
                ));
            }
        });
    };

    return (
        <div className="comments-section">
            <h4>Comentarios</h4>
            {posts.map((post) => (
                <div key={post.id}>
                    {post.comments.length > 0 ? (
                        <ul>
                            {post.comments.map((comment, idx) => (
                                <li key={idx} >
                                    {editingCommentIndex === idx ? (
                                        <div className='d-flex'>
                                            <textarea
                                                value={editCommentContent}
                                                onChange={(e) => setEditCommentContent(e.target.value)}
                                                placeholder="Edita tu comentario..."
                                            />
                                            <button onClick={() => handleEditCommentSubmit(post.id, idx)}>Guardar</button>
                                            <button onClick={() => setEditingCommentIndex(null)}>Cancelar</button>
                                        </div>
                                    ) : (
                                        <div className='d-flex flex-row justify-content-between align-items-start'>
                                            {comment}
                                            <div className='d-flex flex-row'>
                                                <button onClick={() => {
                                                    setEditingCommentIndex(idx);
                                                    setEditCommentContent(comment);
                                                }}><i class="fa-regular fa-pen-to-square"></i></button>
                                                <button onClick={() => handleDeleteComment(post.id, idx)}><i class="fa-solid fa-x"></i></button>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No hay comentarios aún.</p>
                    )}
                    <div className='mb-3'>
                        <textarea
                            value={comment}
                            onChange={handleCommentChange}
                            placeholder="¿Qué ideas te gustaría agregar? Comenta aquí..."
                        />
                        <button onClick={() => handleCommentSubmit(post.id)}>Añadir Comentario</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CommentS;
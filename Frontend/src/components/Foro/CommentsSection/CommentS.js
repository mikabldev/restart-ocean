import { useState } from 'react';
import Swal from 'sweetalert2';
// import './PostList.css'; 

const CommentS = ({ post = [], addComment, editComment, deleteComment }) => {
    const [comment, setComment] = useState('');
    const [editingCommentIndex, setEditingCommentIndex] = useState(null);
    const [editCommentContent, setEditCommentContent] = useState('');
    const handleCommentChange = (e) => setComment(e.target.value);

    const handleCommentSubmit = (postId) => {
        if (comment.trim()) {
            addComment(postId, comment);
            setComment('');
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
                deleteComment(postId, commentIndex);
            }
        });
    };



    return (
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
                placeholder="¿Qué ideas te gustaría agregar? Comenta aquí..."
            />
            <button onClick={() => handleCommentSubmit(post.id)}>Añadir Comentario</button>
        </div>
    )
}

export default CommentS
import React, { useState, useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Importar los estilos de Quill
import '../components/Foro/NewPost/NewPost.css';
import axios from 'axios'
import Swal from 'sweetalert2'
import LSidebar from '../components/Foro/Left-Sidebar/LSidebar';

const NewPost = ({ addPost, setPosts }) => {
    const [showEditor, setShowEditor] = useState(false); // Controlar cuándo mostrar el editor
    const quillRef = useRef(null);
    const quillInstanceRef = useRef(null);
    const [post, setPost] = useState({
        title: '',
        content: ''
    });

    const handlePost = (e) => {
        const { name, value } = e.target;
        setPost((prevPost) => ({
            ...prevPost,
            [name]: value
        }))
    }

    useEffect(() => {
        if (showEditor && !quillInstanceRef.current) {
            quillInstanceRef.current = new Quill(quillRef.current, {
                theme: 'snow',
                placeholder: 'Escribe el contenido aquí...',
            });

            quillInstanceRef.current.on('text-change', () => {
                setPost(prevPost => ({
                    ...prevPost,
                    content: quillInstanceRef.current.root.innerHTML
                }))
            });
        }
    }, [showEditor]);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (post.title && post.content) {
            addPost(post)

            axios.post('http://localhost:3005/foro', post)
                .then(() => {
                    Swal.fire({
                        title: "Genial!",
                        text: "Post agregado con éxito!",
                        icon: "success"
                    })
                })
                .catch((error => {
                    // Manejo de error
                    if (error.response) {
                        // La solicitud se realizó y el servidor respondió con un código de estado
                        // que no está en el rango de 2xx
                        console.error('Error de respuesta:', error.response.data)
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: `Error: ${error.response.data.message || 'Ocurrió un error'}`,
                        })

                    } else if (error.request) {
                        // La solicitud se realizó pero no se recibió respuesta
                        console.error('Error de solicitud:', error.request)
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: 'Error: No se recibió respuesta del servidor',
                        })
                    } else {
                        // Algo ocurrió al configurar la solicitud
                        console.error('Error:', error.message)
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: `Error: ${error.message}`,
                        })
                    }
                })
                )

            setPost({
                title: '',
                content: ''
            })
            setShowEditor(false)
        }
    }


    return (
        <>
            <div className='newpostcontainer'>
                <div className='LSidebar'>
                    <LSidebar />
                </div>

                <div className='newpostform'>
                    <form onSubmit={handleSubmit} className="post-form">
                        <h2 className='titulonewpost'>Nuevo Post</h2>
                        <div>
                            <label htmlFor="title">Título:</label>
                            <input
                                type="text"
                                id="title"
                                name='title'
                                label='title'
                                value={post.title}
                                onChange={handlePost}
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
                                    name='content'
                                    autoComplete='content'
                                    label='content'
                                    placeholder="Haz clic para agregar contenido..."
                                    onClick={() => setShowEditor(true)} // Mostrar editor al hacer clic
                                    value={post.content}
                                    onChange={handlePost}
                                />
                            )}
                        </div>
                        <button type="submit">Añadir Post</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default NewPost;
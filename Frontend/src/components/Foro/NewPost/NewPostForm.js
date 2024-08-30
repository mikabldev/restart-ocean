import React, { useState, useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Importar los estilos de Quill
import './NewPostForm.css';
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const NewPostForm = () => {
    const token = window.sessionStorage.getItem('token')
    const userdId = sessionStorage.getItem('userId');
    const Navigate = useNavigate()
    useEffect(() => {
        if (userdId && token) {
            console.log('ID encontrado desde newPostForm:', userdId);
            console.log('TOKEN encontrado desde newPostForm:', token);
        } else {
            console.log('No se encontró ningún ID o no se encontró el TOKEN en sessionStorage');
        }
    }, [])

    const [showEditor, setShowEditor] = useState(true); // Controlar cuándo mostrar el editor
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
            })

            quillInstanceRef.current.on('text-change', () => {
                setPost(prevPost => ({
                    ...prevPost,
                    content: quillInstanceRef.current.root.innerHTML
                }))
            })
        }
    }, [showEditor, post.content])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (post.title && post.content) {

            const sendPost = {
                title: post.title,
                content: post.content,
                usuarioId: userdId
            }



            axios.post('http://localhost:3005/foro', sendPost, { headers: { Authorization: `Bearer ${token}` } })
                .then(() => {
                    Swal.fire({
                        title: "Genial!",
                        text: "Post agregado con éxito!",
                        icon: "success"
                    })
                    setPost({
                        title: '',
                        content: ''
                    })

                    // Vacía el contenido del editor
                    if (quillInstanceRef.current) {
                        quillInstanceRef.current.root.innerHTML = '';
                    }
                    Navigate('/foro')
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
                            text: 'Debes iniciar sesión para publicar',
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


        }
    }

    return (
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
    )
}

export default NewPostForm;
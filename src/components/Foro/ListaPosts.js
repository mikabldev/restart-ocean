import React from 'react';
import Post from './Post';

const ListaPosts = () => {
    const posts = [
        { id: 1, title: 'Primera publicación', content: 'Contenido de la primera publicación.' },
        { id: 2, title: 'Segunda publicación', content: 'Contenido de la segunda publicación.' },
        // Añade más publicaciones aquí
    ];

    return (
        <div>
            {posts.map(post => (
                <Post key={post.id} title={post.title} content={post.content} />
            ))}
        </div>
    );
};

export default ListaPosts;

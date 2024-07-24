// src/components/BackgroundVideo.js
import React from 'react';
import Navbar from './Navbar';
import './BackgroundVideo.css';

const BackgroundVideo = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted>
        <source src="/videos/background.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
        <Navbar />
      <div className="content d-flex flex-column ">
        {/* Aquí puedes agregar el contenido que quieres mostrar sobre el video */}
        <div className=''>
          <h1 className='titulo'>Restart Ocean</h1>
          <p>Reseteando la vida marina</p>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
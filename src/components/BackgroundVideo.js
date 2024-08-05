// src/components/BackgroundVideo.js
import React from 'react';
import './BackgroundVideo.css';

const BackgroundVideo = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted>
        <source src="/videos/background.mp4" type="video/mp4" />
        No se puede mostrar este video en tu navegador
      </video>

      <div className="contentBG d-flex flex-column ">
        <div>
          <h1 className='titulo'>Restart Ocean</h1>
          <p>Reseteando la vida marina</p>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
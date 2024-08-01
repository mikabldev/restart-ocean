import React, { useState } from 'react';
import '../components/Carrusel-colab.css';

const Carousel = () => {
  const [image, setImage] = useState(`${process.env.PUBLIC_URL}/img/1.jpg`);
  const [description, setDescription] = useState('Descripción de la imagen 1');
  const [title, setTitle] = useState('Colaborador 1');
  const [activeThumb, setActiveThumb] = useState('Colaborador 1');

  const imgSlider = (src, desc, title) => {
    setImage(src);
    setDescription(desc);
    setTitle(title);
  };

  return (
    <section>
      <div className="bg" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <header>
        <a href="#" className="logo">COLABORADORES</a>
        <div className="toggle"></div>
      </header>
      <div className="content">
        <div className="text-box">
          <h2>{title}</h2> {/* Mostrar el título aquí */}
          <p>{description}</p>
          <a href="#">Conoce más</a>
        </div>
        <div className="imageBox">
          <img src={image} className="" alt={title} />
        </div>
      </div>
      <ul className="thumb">
        <li className={activeThumb === 'Colaborador 1' ? 'active' : ''} 
            onClick={() => { imgSlider(`${process.env.PUBLIC_URL}/img/1.jpg`, 'Descripción del colaborador 1', 'Colaborador 1'); setActiveThumb('Colaborador 1'); }}>
          <img src={`${process.env.PUBLIC_URL}/img/1.jpg`} alt="Colaborador 1" />
        </li>
        <li className={activeThumb === 'Colaborador 2' ? 'active' : ''} 
            onClick={() => { imgSlider(`${process.env.PUBLIC_URL}/img/2.jpg`, 'Descripción del colaborador 2', 'Colaborador 2'); setActiveThumb('Colaborador 2'); }}>
          <img src={`${process.env.PUBLIC_URL}/img/2.jpg`} alt="Colaborador 2" />
        </li>
        <li className={activeThumb === 'Colaborador 3' ? 'active' : ''} 
            onClick={() => { imgSlider(`${process.env.PUBLIC_URL}/img/3.jpg`, 'Descripción del colaborador 3', 'Colaborador 3'); setActiveThumb('Colaborador 3'); }}>
          <img src={`${process.env.PUBLIC_URL}/img/3.jpg`} alt="Colaborador 3" />
        </li>
        <li className={activeThumb === 'Colaborador 4' ? 'active' : ''} 
            onClick={() => { imgSlider(`${process.env.PUBLIC_URL}/img/4.jpg`, 'Descripción del colaborador 4', 'Colaborador 4'); setActiveThumb('Colaborador 4'); }}>
          <img src={`${process.env.PUBLIC_URL}/img/4.jpg`} alt="Colaborador 4" />
        </li>
        <li className={activeThumb === 'Colaborador 5' ? 'active' : ''} 
            onClick={() => { imgSlider(`${process.env.PUBLIC_URL}/img/6.jpg`, 'Descripción del colaborador 5', 'Colaborador 5'); setActiveThumb('Colaborador 5'); }}>
          <img src={`${process.env.PUBLIC_URL}/img/6.jpg`} alt="Colaborador 5" />
        </li>
      </ul>
    </section>
  );
}

export default Carousel;



import React, { useState } from 'react';
import './Carrusel-colab.css';

const Carousel = () => {
  // Inicializar los estados con los valores correspondientes a "Fundación Meri"
  const [image, setImage] = useState(`${process.env.PUBLIC_URL}/img/1.jpg`);
  const [description, setDescription] = useState('La Fundación Meri promueve la conservación de ecosistemas marinos y costeros en Chile. Su trabajo incluye la investigación científica, la educación ambiental y la creación de políticas públicas para proteger la biodiversidad marina. Colaboran con comunidades locales y organizaciones internacionales para implementar proyectos de conservación. Además, desarrollan programas de concientización sobre la importancia de los océanos y la vida marina. La Fundación busca asegurar un futuro sostenible para los ecosistemas marinos y costeros chilenos.');
  const [title, setTitle] = useState('Fundación Meri');
  const [link, setLink] = useState('https://www.fundacionmeri.cl/'); // Enlace de Fundación Meri
  const [activeThumb, setActiveThumb] = useState('Colaborador 1');

  const imgSlider = (src, desc, title, link) => {
    setImage(src);
    setDescription(desc);
    setTitle(title);
    setLink(link);
  };

  return (
    <section>
      <div className="bg" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <header>
        <div className="toggle"></div>
      </header>
      <div className="content">
        <div className="text-box">
          <h2>{title}</h2>
          <p>{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">Conoce más</a>
        </div>
        <div className="imageBox">
          <img src={image} className="" alt={title} />
        </div>
      </div>
      <ul className="thumb">
        <li className={activeThumb === 'Colaborador 1' ? 'active' : ''} 
            onClick={() => { imgSlider(`${process.env.PUBLIC_URL}/img/1.jpg`, 'La Fundación Meri promueve la conservación de ecosistemas marinos y costeros en Chile. Su trabajo incluye la investigación científica, la educación ambiental y la creación de políticas públicas para proteger la biodiversidad marina. Colaboran con comunidades locales y organizaciones internacionales para implementar proyectos de conservación. Además, desarrollan programas de concientización sobre la importancia de los océanos y la vida marina. La Fundación busca asegurar un futuro sostenible para los ecosistemas marinos y costeros chilenos.', 'Fundación Meri', 'https://www.fundacionmeri.cl/'); setActiveThumb('Colaborador 1'); }}>
          <img src={`${process.env.PUBLIC_URL}/img/1.jpg`} alt="Colaborador 1" />
        </li>
        <li className={activeThumb === 'Colaborador 2' ? 'active' : ''} 
            onClick={() => { imgSlider(`${process.env.PUBLIC_URL}/img/2.jpg`, 'El Centro Ecocéanos es una organización independiente que promueve la conservación de los océanos y su biodiversidad mediante campañas de información, movilización pública y acciones no violentas. Fomentan una cultura de defensa de la vida marina y el empoderamiento ciudadano hacia un futuro sustentable y post-extractivista. Sus ejes de acción incluyen comunicación, investigación, educación y defensa socio-ambiental y de derechos humanos.', 'Eco Oceanos', 'https://www.ecoceanos.cl/'); setActiveThumb('Colaborador 2'); }}>
          <img src={`${process.env.PUBLIC_URL}/img/2.jpg`} alt="Colaborador 2" />
        </li>
        <li className={activeThumb === 'Colaborador 3' ? 'active' : ''} 
            onClick={() => { imgSlider(`${process.env.PUBLIC_URL}/img/3.jpg`, 'La Fundación Meri promueve la conservación de ecosistemas marinos y costeros en Chile. Su trabajo incluye la investigación científica, la educación ambiental y la creación de políticas públicas para proteger la biodiversidad marina. Colaboran con comunidades locales y organizaciones internacionales para implementar proyectos de conservación. Además, desarrollan programas de concientización sobre la importancia de los océanos y la vida marina. La Fundación busca asegurar un futuro sostenible para los ecosistemas marinos y costeros chilenos.', 'Fundación Oceanos', 'https://www.fundacionoceanos.cl/'); setActiveThumb('Colaborador 3'); }}>
          <img src={`${process.env.PUBLIC_URL}/img/3.jpg`} alt="Colaborador 3" />
        </li>
        <li className={activeThumb === 'Colaborador 4' ? 'active' : ''} 
            onClick={() => { imgSlider(`${process.env.PUBLIC_URL}/img/4.jpg`, 'El Núcleo Milenio Centro de Conservación Marina de la Pontificia Universidad Católica de Chile, financiado por el Ministerio de Economía, se centra en el manejo sostenible de recursos marinos. Su programa Chile es Mar busca cambiar la percepción de Chile como una franja terrestre, resaltando que más del 70% del territorio es marino y necesita protección. Investigan las corrientes costeras, la diversidad marina y el impacto humano, además de educar a la comunidad sobre la importancia del mar. Promueven una identidad colectiva centrada en la conservación marina y realizan talleres y campañas educativas.', 'Chile es Mar', 'https://www.chileesmar.cl/'); setActiveThumb('Colaborador 4'); }}>
          <img src={`${process.env.PUBLIC_URL}/img/4.jpg`} alt="Colaborador 4" />
        </li>
        <li className={activeThumb === 'Colaborador 5' ? 'active' : ''} 
            onClick={() => { imgSlider(`${process.env.PUBLIC_URL}/img/6.jpg`, 'Oceana, fundada en 2001, es la mayor organización internacional dedicada exclusivamente a la conservación de los océanos. Trabajan en campañas estratégicas para recuperar la salud y biodiversidad marina, visualizando océanos llenos de vida y abundancia. Los océanos, cruciales para la vida y el clima, están en peligro por la sobrepesca, pero Oceana promueve una gestión pesquera científica para su recuperación.', 'Oceana', 'https://oceana.org/'); setActiveThumb('Colaborador 5'); }}>
          <img src={`${process.env.PUBLIC_URL}/img/6.jpg`} alt="Colaborador 5" />
        </li>
      </ul>
    </section>
  );
}

export default Carousel;

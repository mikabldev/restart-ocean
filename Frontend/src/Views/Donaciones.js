import React from 'react';
import '../components/Donaciones/Donaciones.css';

const Donaciones = () => {
  const handleDonateClick = () => {
    window.location.href = 'https://donaronline.org/';
  };

  return (
    <div className="donations-container">
      <div className="text-and-button">
        <h2>Apoya Nuestro Proyecto</h2>
        <p>Tu donación nos ayuda a seguir desarrollando y mejorando nuestro proyecto. ¡Gracias por tu apoyo!</p>
        <button className="donate-button" onClick={handleDonateClick}>Dona Aquí</button>
      </div>
      <img 
        src={`${process.env.PUBLIC_URL}/img/PlayaSucia.jpg`} 
        alt="Imagen de apoyo" 
        className="donation-image"
      />
      <div className="amount-raised">
        <h3>Recaudado Hasta el Momento</h3>
        <p>$0.00</p>
      </div>
    </div>
  );
}

export default Donaciones;

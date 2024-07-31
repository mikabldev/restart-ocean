import React from 'react';
import BackgroundVideo from '../components/BackgroundVideo';
import CardsQS from '../components/CardsQS';
import Carousel from '../components/Carousel'

const Inicio = () => {
    return (
        <div>
            <BackgroundVideo />
            <h1>Bienvenidos a Restart Ocean</h1>
            <p>Descripción de la misión y visión del proyecto.</p>
            <CardsQS />
            <Carousel/>
        </div>
    );
};

export default Inicio;

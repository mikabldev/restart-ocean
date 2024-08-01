import React from 'react';
import BackgroundVideo from '../components/BackgroundVideo';
import CardsQS from '../components/CardsQS/CardsQS';
import Carousel from '../components/Carousel'
import Calendar1 from '../components/Calendar1'

const Inicio = () => {
    return (
        <div>
            <BackgroundVideo />
            <h1>Bienvenidos a Restart Ocean</h1>
            <p>Descripción de la misión y visión del proyecto.</p>
            <CardsQS />
            <Carousel/>
            <Calendar1/>
        </div>
    );
};

export default Inicio;

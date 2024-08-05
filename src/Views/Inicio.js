import React from 'react';
import BackgroundVideo from '../components/BackgroundVideo';
import CardsQS from '../components/CardsQS/CardsQS';
import Carousel from '../components/Carrusel-colab'
import Calendar1 from './Calendar1'

const Inicio = () => {
    return (
        <div>
            <BackgroundVideo />
            <CardsQS />
            <Carousel/>
            <Calendar1/>
            
        </div>
    );
};

export default Inicio;

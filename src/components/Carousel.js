import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import './Carrusel-colab.css'; 

const Carousel = () => {
  return (
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem itemId={1}>
        <img src={`${process.env.PUBLIC_URL}/img/13.jpg`} className='d-block w-100 carousel-image' alt='...' />
        <MDBCarouselCaption>
          <h5>Colaborador 1</h5>
          <p>Descripción  de los colaboradores</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src={`${process.env.PUBLIC_URL}/img/2.jpg`} className='d-block w-100 carousel-image' alt='...' />
        <MDBCarouselCaption>
          <h5>Colaborador 2</h5>
          <p>Descripción  de los colaboradores</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src={`${process.env.PUBLIC_URL}/img/3.jpg`} className='d-block w-100 carousel-image' alt='...' />
        <MDBCarouselCaption>
          <h5>Colaborador 3</h5>
          <p>Descripción de los colaboradores</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={4}>
        <img src={`${process.env.PUBLIC_URL}/img/4.jpg`} className='d-block w-100 carousel-image' alt='...' />
        <MDBCarouselCaption>
          <h5>Colaborador 4</h5>
          <p>Descripción de los colaboradores</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={5}>
        <img src={`${process.env.PUBLIC_URL}/img/6.jpg`} className='d-block w-100 carousel-image' alt='...' />
        <MDBCarouselCaption>
          <h5>Colaborador 5</h5>
          <p>Descripción de los colaboradores</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}

export default Carousel;
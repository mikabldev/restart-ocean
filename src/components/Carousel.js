import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

const Carousel = () => {
  return (
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem itemId={1}>
        <img src='https://www.ultraimagehub.com/wallpapers/tr:flp-false,gx-0.6,gy-0.1,q-75,rh-3264,rw-5824,th-1080,tw-1920/1236878027892461668.jpeg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>Colaborador 1</h5>
          <p>Descripcion de los colaboradores</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='https://www.10wallpaper.com/wallpaper/2560x1600/1603/Dolphin_underwater-Marine_life_HD_Wallpaper_2560x1600.jpg' className='d-block w-100' alt='...' />

        <MDBCarouselCaption>
          <h5>Colaborador 2</h5>
          <p>Descripcion de los colaboradores</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='https://static.nationalgeographic.es/files/styles/image_3200/public/01_oceancreatures_mjed49.jpg?w=1600&h=900' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>Colaborador 3</h5>
          <p>Descripcion de los colaboradores</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}

export default Carousel;
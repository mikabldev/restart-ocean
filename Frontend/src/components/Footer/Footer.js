import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter style={{backgroundColor: '#013F56', color: '#f6f4ff'}} className='text-center text-lg-start text-muted p-1'>

      <div className=''>
        <MDBContainer className='text-center text-md-start mt-5' style={{color: '#f6f4ff'}}>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color: '#f6f4ff'}}>
                <MDBIcon icon="fish" className="me-3" />
                Restart Ocean
              </h6>
                <p>
                  Restart Ocean es una iniciativa dedicada a la conservación y cuidado de la vida marina en Chile, sin fines de lucro. Conectamos personas con organizaciones, ambas partes interesadas en proteger, limpiar y mejorar los océanos, promoviendo además proyectos de conservación marina.
                </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Explora
              </h6>
              <p>
                <a href='/' className='text-reset'>
                  Inicio
                </a>
              </p>
              <p>
                <a href='/quienes-somos' className='text-reset'>
                  Conócenos más
                </a>
              </p>
              <p>
                <a href='/foro' className='text-reset'>
                  Foro
                </a>
              </p>
              <p>
                <a href='/donaciones' className='text-reset'>
                  Donaciones
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
              <p>
                <MDBIcon icon="home" style={{alignItems: 'center', marginRight: '15px'}} />
                Santiago, Chile
              </p>
              <p>
                <MDBIcon icon="envelope" style={{alignItems: 'center', marginRight: '17px'}}/>
                restartocean.cl@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" style={{alignItems: 'center', marginRight: '10px'}}/> +56 9 1234 5678
              </p>

              <a href='#!' className='text-reset'>
                <MDBIcon icon="globe" style={{alignItems: 'center', marginRight: '12px'}}/> www.exoticoders.cl
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

      <div className='text-center p-2' style={{backgroundColor: '#044e69', color: '#f6f4ff'}}>
      © 2024 Restart Ocean es una iniciativa impulsada por ExotiCoders Chile. Todos los derechos reservados.
      </div>
    </MDBFooter>
  );
}


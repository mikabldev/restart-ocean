import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='black' className='text-center text-lg-start text-muted p-1'>

      <div className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="fish" className="me-3" />
                Restart Ocean
              </h6>
              <p>
                <p>
                  Restart Ocean es una iniciativa dedicada a la conservación y cuidado de la vida marina en Chile, sin fines de lucro. Conectamos personas con organizaciones, ambas partes interesadas en proteger, limpiar y mejorar los océanos, promoviendo además proyectos de conservación marina.
                </p>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Enlaces utiles
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
                <a href='#!' className='text-reset'>
                  Noticias
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
                <MDBIcon icon="home" className="me-2" />
                Santiago, Chile
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                contacto@restartocean.org
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +56 9 1234 5678
              </p>

              <a href='#!' className='text-reset'>
                <MDBIcon icon="globe" className="me-3" /> www.exoticoders.cl
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

      <div className='text-center p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2024 Restart Ocean por ExotiCoders Chile. Todos los derechos reservados.
      </div>
    </MDBFooter>
  );
}


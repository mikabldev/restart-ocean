
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='black' className='text-center text-lg-start text-muted'>
      <div className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Conecta con nosotros en nuestras redes :</span>
        </div>

        <div>
          <a href='!#' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='!#' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='!#' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='!#' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='!#' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='!#' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </div>

      <div className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="fish" className="me-3" />
                Restart Ocean
              </h6>
              <p>
                <b>Resetiemos</b>
                <br></br>
                <b>el Oceano</b>
              </p>
              <p>
                <h6>Acerca de Restart Ocean:</h6>
                <p>
                  "Restart Ocean es una iniciativa dedicada a la conservación y cuidado de la vida marina en Chile, sin fines de lucro. Conectamos personas con organizaciones, ambas partes interesadas en proteger, limpiar y mejorar los océanos, promoviendo además proyectos de conservación marina."
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
              <p>
                <a href='#!' className='text-reset'>
                  Terminos y Condiciones
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Politica de privacidad
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Interes</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Preguntas frecuentes
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Prensa
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Politica de privacidad
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Trabaja con nosotros
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

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2024 Restart Ocean por ExotiCoders Chile. Todos los derechos reservados
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          
        </a>
      </div>
    </MDBFooter>
  );
}



import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='black' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
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
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="fish" className="me-3" />
                Restart Ocean
              </h6>
              <p>
                Resetiemos
                <br></br>
                el Oceano
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Bootstrap
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Node
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  MySQL
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
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Algun Lugar
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>

              <a href='#!' className='text-reset'>
                <MDBIcon icon="globe" className="me-3" /> www.abc.cl
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Exoticoders
        </a>
      </div>
    </MDBFooter>
  );
}


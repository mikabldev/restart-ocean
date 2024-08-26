import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './LSidebar.css';
import 'boxicons/css/boxicons.min.css';
import { Container, Row, Col, Nav, Dropdown, DropdownButton, Stack } from 'react-bootstrap';


const LSidebar = () => {
  return (
    <Container fluid>
      <Row>
        <Col as="aside" className="bg-dark d-flex flex-column justify-content-between min-vh-100">
          <Stack gap={3} className="sidebar-links">
            <Nav.Item className="s-menu">
              <i className='bx bx-water' style={{ marginRight: '8px', alignItems: 'center' }}></i>
              <span>Menú</span>
            </Nav.Item>

            {/* Separación de menú con hr */}
            <hr className="text-white" />

            {/* Menú del Foro */}
            <Nav defaultActiveKey="#home" className="flex-column">
              <Nav.Item>
                <Nav.Link to="/foro" className="s-principal">
                  <i class='bx bx-book-open'></i>
                  <span className="ms-2">Principal</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/posts-recientes" className="s-reciente">
                  <i class='bx bx-time-five'></i>
                  <span className="ms-2">Reciente</span>
                </Nav.Link>
              </Nav.Item>

              {/* Separacion interna menu */}
              <hr className="text-white" />

              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle as={Nav.Link} className="s-t-categorias">
                  <i class='bx bx-customize' style={{ marginRight: '5px' }}></i>
                  <span className="ms-2">Categorías</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="s-categorias">
                  <Dropdown.Item href="#category1">
                    <i class='bx bx-shield-plus' style={{ marginRight: '8px', alignItems: 'center' }}></i>
                    <span>Conservación Marina: Biodiversidad y Protección</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#category2">
                    <i class='bx bx-bulb' style={{ marginRight: '8px', alignItems: 'center' }}></i>
                    <span>Innovación tecnológica e Investigación Científica</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#category3">
                    <i class='bx bx-book' style={{ marginRight: '8px', alignItems: 'center' }}></i>
                    <span>Educación, Conciencia y Cultura Oceánica</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#category4">
                    <i class='bx bx-group' style={{ marginRight: '8px', alignItems: 'center' }}></i>
                    <span>Colaboraciones comunitarias y Activismo</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {/* Separacion interna menu */}
              <hr className="text-white" />

              {/* Menú desplegable para Multimedia */}
              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle as={Nav.Link} className="s-t-multimedia">
                  <i class='bx bx-category-alt'></i>
                  <span className="ms-2">Multimedia</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="s-multimedia">
                  <Dropdown.Item href="#documentales">
                    <i class='bx bx-video-recording' style={{ marginRight: '8px', alignItems: 'center' }}></i>
                    <span>Documentales</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#tutoriales">
                    <i class='bx bx-extension' style={{ marginRight: '8px', alignItems: 'center' }}></i>
                    <span>Tutoriales</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#videos">
                    <i class='bx bx-video' style={{ marginRight: '8px', alignItems: 'center' }}></i>
                    <span>Videos</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#podcasts">
                    <i class='bx bx-podcast' style={{ marginRight: '8px', alignItems: 'center' }}></i>
                    <span>Podcasts</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {/* Separacion interna menu */}
              <hr className="text-white" />

              {/* Aquí empieza el menú de usuario */}
              <Stack direction="horizontal" gap={3} className="dropdown open">
                <DropdownButton
                  id="user-btn"
                  title="Ola, Mika"
                >
                  <Dropdown.Item href="#/action-1" active>
                    <i className='bx bx-swim' style={{ marginRight: '5px', alignItems: 'center' }}></i>
                    <span>Mi perfil</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <i className='bx bx-message-rounded-dots' style={{ marginRight: '5px', alignItems: 'center' }}></i>
                    <span>Mis publicaciones</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <i className='bx bx-cog' style={{ marginRight: '5px', alignItems: 'center' }}></i>
                    Ajustes
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-4" className='logout'>
                    <i className='bx bx-log-out' style={{ marginRight: '5px', alignItems: 'center' }}></i>
                    Cerrar sesión
                  </Dropdown.Item>
                </DropdownButton>
              </Stack>
            </Nav>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default LSidebar;

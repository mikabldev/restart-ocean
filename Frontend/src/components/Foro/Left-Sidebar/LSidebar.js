import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './LSidebar.css';
import 'boxicons/css/boxicons.min.css';
import {  Col, Nav, Dropdown, DropdownButton, Stack } from 'react-bootstrap';


const LSidebar = () => {
  return (
    <div className="Lside-container">
      <div className="row-styles">
        <Col as="aside" className="s-columna">
          <Stack gap={2} className="sidebar-links">
            <Nav.Item className="s-menu">
              <i className='bx bx-water' style={{ marginRight: '8px', alignItems: 'center' }}></i>
              <span>Menú Foro</span>
            </Nav.Item>

            {/* Separación de menú con hr */}
            <hr className="text-black" />

            {/* Menú del Foro */}
            <Nav defaultActiveKey="#home" className="flex-column">
              <Nav.Item>
                <Nav.Link to="/foro" className="s-principal">
                  <i class='bx bx-book-open' style={{ marginRight: '8px', alignItems: 'center' }}></i>
                  <span>Principal</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/posts-recientes" className="s-reciente">
                  <i class='bx bx-time-five' style={{ marginRight: '8px', alignItems: 'center' }}></i>
                  <span>Reciente</span>
                </Nav.Link>
              </Nav.Item>

              {/* Separacion interna menu */}
              <hr className="text-black" />

              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle as={Nav.Link} className="s-t-categorias">
                  <i className='bx bx-customize' style={{ marginRight: '8px' }}></i>
                  <span className="t-categorias">Categorías</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="s-categorias">
                  <Dropdown.Item href="#category1">
                    <i className='bx bx-shield-plus' style={{ marginRight: '8px', alignItems: 'center' }}></i>
                    <span>Conservación Marina: Biodiversidad y Protección</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#category2">
                    <i className='bx bx-bulb' style={{ marginRight: '8px', alignItems: 'center' }}></i>
                    <span>Innovación tecnológica e Investigación Científica</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#category3">
                    <i className='bx bx-book' style={{ marginRight: '8px', alignItems: 'center' }}></i>
                    <span>Educación, Conciencia y Cultura Oceánica</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#category4">
                    <i className='bx bx-group' style={{ marginRight: '8px', alignItems: 'center' }}></i>
                    <span>Colaboraciones comunitarias y Activismo</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {/* Separacion interna menu */}
              <hr className="text-black" />

              {/* Menú desplegable para Multimedia */}
              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle as={Nav.Link} className="s-t-multimedia">
                  <i className='bx bx-category-alt' style={{ marginRight: '8px', alignItems: 'center' }}></i>
                  <span className="t-multimedia">Multimedia</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="s-multimedia">
                  <Dropdown.Item href="#documentales">
                    <i className='bx bx-video-recording' style={{ marginRight: '8px', alignItems: 'center' }}></i>
                    <span>Documentales</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#tutoriales">
                    <i className='bx bx-extension' style={{ marginRight: '8px', alignItems: 'center' }}></i>
                    <span>Tutoriales</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#videos">
                    <i className='bx bx-video' style={{ marginRight: '8px', alignItems: 'center' }}></i>
                    <span>Videos</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#podcasts">
                    <i className='bx bx-podcast' style={{ marginRight: '8px', alignItems: 'center' }}></i>
                    <span>Podcasts</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {/* Separacion interna menu */}
              <hr className="text-black" />

              {/* Aquí empieza el menú de usuario */}
              <Stack direction="horizontal" className="dropdownOpen">
                <DropdownButton
                  id="user-btn"
                  title="Ola, Mika"
                >
                  <Dropdown.Item href="#/action-1">
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
      </div>
    </div>
  );
};

export default LSidebar;

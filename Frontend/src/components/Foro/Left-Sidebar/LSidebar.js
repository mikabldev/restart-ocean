import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import './LSidebar.css';
import 'boxicons/css/boxicons.min.css';
import { Container, Row, Col, Nav, Dropdown, DropdownButton, Stack, ListGroup, Badge } from 'react-bootstrap';
// import Collapse from "react-bootstrap/esm/Collapse";


const LSidebar = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} sm={4} md={3} lg={2} as="aside" className="bg-dark d-flex flex-column justify-content-between min-vh-100">
          <Stack gap={3} className="sidebar-links">
            <Nav.Link href="#" className="s-menu">
              <i className='bx bx-water' style={{ marginRight: '8px' }}></i>
              <span>Menú</span>
            </Nav.Link>

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

              {/* Categorías del foro */}
              <ListGroup className="f-categorias">
                <ListGroup.Item>
                  <i class='bx bx-category-alt' style={{ marginRight: '5px' }}></i>
                  <span>Categorías</span>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                  </div>
                  <Badge bg="primary" pill>
                    14
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                  </div>
                  <Badge bg="primary" pill>
                    14
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                  </div>
                  <Badge bg="primary" pill>
                    14
                  </Badge>
                </ListGroup.Item>
              </ListGroup>

              {/* Separacion interna menu */}
              <hr className="text-white" />

              {/* Menú desplegable para Multimedia */}
              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle as={Nav.Link} className="s-t-multimedia">
                  <i class='bx bx-category-alt'></i>
                  <span className="ms-2">Multimedia</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="s-multimedia">
                  <Dropdown.Item href="#category1">
                    <i></i>
                    <span>Documentales</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#category2">
                    <i></i>
                    <span>Tutoriales</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#category3">
                    <i></i>
                    <span>Videos</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#category4">
                    <i></i>
                    <span>Podcasts</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {/* Separacion interna menu */}
              <hr className="text-white" />

              {/* Aquí empieza el menú dropdown */}
              <Stack direction="horizontal" gap={3} className="dropdown open">
                <DropdownButton id="user-btn" title="Ola, Mika" data-bs-theme="dark">
                  <Dropdown.Item href="#/action-1" active>
                    <i className='bx bx-swim' style={{ marginRight: '5px', alignItems: 'center' }}></i>
                    Mi perfil
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <i className='bx bx-message-rounded-dots' style={{ marginRight: '5px', alignItems: 'center' }}></i>
                    Mis publicaciones
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

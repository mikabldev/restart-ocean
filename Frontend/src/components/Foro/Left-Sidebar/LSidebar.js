import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import './LSidebar.module.css';
import 'boxicons/css/boxicons.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';

const LSidebar = () => {
  return (
    <Container fluid>
      <div className="row">
        <div className="col-auto col-sm-2 bg-dark d-flex flex-column justify-content-between min-vh-100" role="button">
          <div className="mt-3">
            <a href="!#" className="text-decoration-none ms-4 d-flex align-items-center text-white d-none d-sm-inline">
              <i className='bx bx-water' style={{ marginRight: '5px' }}></i>
              <span className="f5-4" >Restart Ocean</span>
            </a>
            <hr className="text-white d-none d-sm-block"></hr>
            <ul className="nav nav-pills flex-column mt-2 mt-sm-0" id="parentM">
              <li className="nav-item my-1 py-2 py-sm-0">
                <a href="!#" className="nav-link text-white text-center text-sm-start" aria-current="page">
                  <i className="bi bi-speedometer2"></i>
                  <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                </a>
              </li>
              <li className="nav-item my-1 py-2 py-sm-0">
                <a href="#submenu" className="nav-link" data-bs-toggle="collapse" aria-current="page">
                  <i className="bi bi-grid"></i>
                  <span className="ms-2 d-none d-sm-inline">Products</span>
                  <i className="bi bi-arrow-down-short ms-0 ms-sm-3"></i>
                </a>
                <ul className="nav collapse ms-2" id='submenu' data-bs-parent="#parentM">
                  <li className="nav-item">
                    <a className="nav-link text-white" href="!#" aria-current="page">
                      <span className="d-none d-sm-inline">Item</span> 1
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="!#">
                      <span className="d-none d-sm-inline">Item</span> 2
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="!#">
                      <span className="d-none d-sm-inline">Item</span> 3
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item my-1 py-2 py-sm-0">
                <a href="!#" className="nav-link text-white text-center text-sm-start" aria-current="page">
                  <i className="bi bi-house"></i>
                  <span className="ms-2 d-none d-sm-inline">House</span>
                </a>
              </li>
              <li className="nav-item my-1 py-2 py-sm-0">
                <a href="!#" className="nav-link text-white text-center text-sm-start" aria-current="page">
                  <i className="bi bi-people"></i>
                  <span className="ms-2 d-none d-sm-inline">Customers</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Aquí empieza el menú dropdown */}
          <Dropdown as={ButtonGroup}>
            <Button variant="secondary">Mi perfil</Button>
            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Stack className="dropdown open" data-bs-theme="dark">
            <div direction="horizontal" gap={3} >
              <DropdownButton id="dropdown-button-dark"
                title="Ola, Mika"
                className="mt-2"
                data-bs-theme="dark">
                <Dropdown.Item href="#/action-1" active>
                  <i className="bi bi-person f5-4" style={{ marginRight: '5px' }}></i>
                  Mi perfil
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <i class='bx bx-book' style={{ marginRight: '5px' }}></i>
                  Mi actividad
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <i class='bx bx-cog' style={{ marginRight: '5px' }}></i>
                  Ajustes
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-4">
                  <i class='bx bx-log-out' style={{ marginRight: '5px' }}></i>
                  Cerrar sesión
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </Stack>

        </div>
      </div>
    </Container>
  );
};

export default LSidebar;

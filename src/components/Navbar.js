import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ModalLogin from './ModalLogin';


const Navba = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" style={{ zIndex: '10' }}>
            <Container fluid>
                <Navbar.Brand as={Link} to="/">Restart Ocean</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link as={Link} to="/calendario">Calendario</Nav.Link>
                        <Nav.Link as={Link} to="/foro">Foro</Nav.Link>
                        <Nav.Link as={Link} to="/donaciones">Donaciones</Nav.Link>
                        <NavDropdown title="Conócenos más" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/quienes-somos">Quienes somos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/colaboradores">Colaboradores</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <ModalLogin />
            </Container>
        </Navbar>
    );
}

export default Navba;

import { Link, Routes } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ModalLogin from './ModalLogin';


const Navba = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary opacity-90" style={{ zIndex: '10' }}>
                <Container fluid>
                    <Navbar.Brand as={Link} to="/">Restart Ocean</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
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
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                    <ModalLogin />
                </Container>
            </Navbar>
            <Routes>
            </Routes>
        </>
    );
}

export default Navba;

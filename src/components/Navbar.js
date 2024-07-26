import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ModalLogin from './ModalLogin';

const Navba = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary opacity-75">
            <Container fluid>
                <Navbar.Brand href="#home">Restart Ocean</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <Nav.Link href="#home">Calendario</Nav.Link>
                        <Nav.Link href="#link">Foro</Nav.Link>
                        <Nav.Link href="#link">Donaciones</Nav.Link>
                        <NavDropdown title="Conócenos más" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Quienes somos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">
                                Colaboradores
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
                <ModalLogin />
            </Container>
        </Navbar>
    );
}

export default Navba;
import React from 'react';
import {
    MDBContainer,
    MDBListGroup,
    MDBListGroupItem,
    MDBBadge,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
    MDBIcon
} from 'mdbreact';

const SidebarDerecho = () => {
    return (
        <MDBContainer className="sidebar-derecho">

            {/* Temas Populares */}
            <MDBCard className="mb-4">
                <MDBCardBody>
                    <MDBCardTitle>Temas Populares</MDBCardTitle>
                    <MDBListGroup>
                        <MDBListGroupItem>
                            Reducción de Plásticos <MDBBadge color="primary" className="ml-2">32</MDBBadge>
                        </MDBListGroupItem>
                        <MDBListGroupItem>
                            Conservación Marina <MDBBadge color="primary" className="ml-2">27</MDBBadge>
                        </MDBListGroupItem>
                    </MDBListGroup>
                </MDBCardBody>
            </MDBCard>

            {/* Iniciativas Destacadas */}
            <MDBCard className="mb-4">
                <MDBCardBody>
                    <MDBCardTitle>Iniciativas Destacadas</MDBCardTitle>
                    <MDBCardText>
                        <strong>Cero Plásticos en Playas Chilenas</strong> - Campaña nacional que organiza limpiezas de playas.
                    </MDBCardText>
                    <MDBBtn href="https://www.ceroplasticosplayas.cl" color="primary" size="sm">
                        Ver Más <MDBIcon icon="angle-right" className="ml-1" />
                    </MDBBtn>
                    <MDBCardText className="mt-3">
                        <strong>Guardianes del Mar</strong> - Programa educativo para colegios en zonas costeras.
                    </MDBCardText>
                    <MDBBtn href="https://www.guardianesdelmar.cl" color="primary" size="sm">
                        Ver Más <MDBIcon icon="angle-right" className="ml-1" />
                    </MDBBtn>
                </MDBCardBody>
            </MDBCard>

            {/* Eventos Próximos */}
            <MDBCard className="mb-4">
                <MDBCardBody>
                    <MDBCardTitle>Eventos Próximos</MDBCardTitle>
                    <MDBListGroup>
                        <MDBListGroupItem>
                            Webinar: Innovación Marina <MDBBadge color="info" className="ml-2">12 de Septiembre</MDBBadge>
                        </MDBListGroupItem>
                        <MDBListGroupItem>
                            Taller de Limpieza Costera <MDBBadge color="info" className="ml-2">20 de Septiembre</MDBBadge>
                        </MDBListGroupItem>
                        <MDBListGroupItem>
                            Foro de Pesca Sostenible <MDBBadge color="info" className="ml-2">28 de Septiembre</MDBBadge>
                        </MDBListGroupItem>
                    </MDBListGroup>
                    <MDBBtn href="/calendario" color="secondary" size="sm" className="mt-3">
                        Ver Calendario Completo <MDBIcon icon="calendar-alt" className="ml-1" />
                    </MDBBtn>
                </MDBCardBody>
            </MDBCard>

            {/* Contribuyentes Principales */}
            <MDBCard className="mb-4">
                <MDBCardBody>
                    <MDBCardTitle>Contribuyentes Principales</MDBCardTitle>
                    <MDBListGroup>
                        <MDBListGroupItem>
                            <MDBIcon icon="user" className="mr-2" />
                            María Pérez <MDBBadge color="success" className="ml-2">245 Posts</MDBBadge>
                        </MDBListGroupItem>
                        <MDBListGroupItem>
                            <MDBIcon icon="user" className="mr-2" />
                            Juan López <MDBBadge color="success" className="ml-2">198 Posts</MDBBadge>
                        </MDBListGroupItem>
                    </MDBListGroup>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
};

export default SidebarDerecho;

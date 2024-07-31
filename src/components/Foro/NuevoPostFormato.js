import React, { useState } from 'react';
import {
  MDBInput,
  MDBBtn,
  MDBValidation,
  MDBValidationItem,
  MDBTextArea,
} from 'mdb-react-ui-kit';

const NuevoPostFormato = ({ addPost }) => {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ titulo, contenido });
    setTitulo('');
    setContenido('');
  };

  return (
    <MDBValidation className='mb-4'>
      <MDBValidationItem feedback='Por favor, ingrese un título.'>
        <MDBInput
          label='Título'
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
      </MDBValidationItem>
      <MDBValidationItem feedback='Por favor, ingrese el contenido.'>
        <MDBTextArea
          label='Contenido'
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
          rows='4'
          required
        />
      </MDBValidationItem>
      <MDBBtn type='submit' onClick={handleSubmit}>Publicar</MDBBtn>
    </MDBValidation>
  );
};

export default NuevoPostFormato;

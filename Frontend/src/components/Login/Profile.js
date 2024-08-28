import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../../context/Context'
import axios from 'axios'
import './profile.css'
import { MDBCard, MDBCardHeader, MDBCardSubTitle, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit'

const Profile = () => {
  const navigate = useNavigate()
  const { getNuevoUsuario, setNuevoUsuario } = useContext(Context)

  const getNuevoUsuarioData = () => {
    const token = window.sessionStorage.getItem('token')
    // extraigo el token del sesion storage
    console.log('token front:', token) // para saber que está llegando el token

    axios.get('http://localhost:3005/users', { headers: { Authorization: `Bearer ${token}` } })
      // desde el endpoint envío la cabecera con el authorization con el token
      .then(({ data: [user] }) => setNuevoUsuario({ ...user }))
      // desde la petición, de data extraugo un arreglo con el usuario y actualizo el estado del nuevo usuario con user
      .catch(({ response: { data } }) => {
        console.error(data)
        window.sessionStorage.removeItem('token')
        setNuevoUsuario(null)
        navigate('/')
      })
  }

  useEffect(getNuevoUsuarioData, [])

  console.log(getNuevoUsuario)

  return (
    <div className='miPerfil'>
      <h1 className='d-flex justify-content-center pt-4'>Bienvenido a RestartOcean</h1>

      <div className='contenidoMiPerfil'>
        <MDBCard className="w-50 p-3 m-5" >
          <MDBCardHeader><MDBCardTitle>Mis Datos Personales:</MDBCardTitle></MDBCardHeader>
          <MDBCardBody >
            <div className='container'>
              <div>
                <MDBCardSubTitle className="subtituloPerfil fw-bold">Nombre:</MDBCardSubTitle>
                <MDBCardText>{getNuevoUsuario?.nombre}</MDBCardText>
              </div>
              <div>
                <MDBCardSubTitle className="subtituloPerfil fw-bold">Apellido:</MDBCardSubTitle>
                <MDBCardText>{getNuevoUsuario?.apellido}</MDBCardText>
              </div>
            </div>

            <div className='container'>
              <div className='mt-3'>
                <MDBCardSubTitle className="subtituloPerfil fw-bold">Email:</MDBCardSubTitle>
                <MDBCardText>{getNuevoUsuario?.email}</MDBCardText>
              </div>
              <div className='mt-3'>
                <MDBCardSubTitle className="subtituloPerfil fw-bold">Teléfono:</MDBCardSubTitle>
                <MDBCardText>{getNuevoUsuario?.telefono}</MDBCardText>
              </div>
            </div>
          </MDBCardBody>
          <div className='d-flex justify-content-center'>
            <MDBBtn className='w-50'>Actualizar datos</MDBBtn>
          </div>
        </MDBCard>

          <img
            src='/img/3.jpg'
            className='imgPerfil img-fluid rounded'
            alt='example'
          />

      </div>
    </div>
  )
}

export default Profile

import React, { useContext, useEffect }  from 'react';
import BackgroundVideo from '../components/BackgroundVideo/BackgroundVideo';
import CardsQS from '../components/CardsQS/CardsQS';
import Carousel from '../components/Carrusel/Carrusel-colab'
import Calendar1 from './Calendar1'
import axios from 'axios'
import Context from '../context/Context.js'

const Inicio = () => {
    const { setNuevoUsuario } = useContext(Context)

    const getNuevoUsuarioData = () => {
      const token = window.sessionStorage.getItem('token')
      if (token) {
        axios.get('http://localhost:3005/users', { headers: { Authorization: `Bearer ${token}` } })
        // arreglo de configuracion de lo que le envío a el endpoint
          .then(({ data: [user] }) => setNuevoUsuario({ ...user }))
          // obtengo un arreglo del usuario desde data y actualizo el estado del nuevo usuario con los datos del usuario
          .catch(() => {
            window.sessionStorage.removeItem('token')
            setNuevoUsuario(null)
            // si la respuesta es erronea elimina el token generado y setea el nuevo usuario en null
          })
      }
    }

    useEffect(getNuevoUsuarioData, [])

    return (
        <div>
            <BackgroundVideo />
            <CardsQS />
            <Carousel/>
            <Calendar1/>

        </div>
    );
};

export default Inicio;

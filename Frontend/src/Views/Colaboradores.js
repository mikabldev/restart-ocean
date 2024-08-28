import React from 'react'
import Carousel from '../components/Carrusel/Carrusel-colab'

const Colaboradores = () => {
  return (
    <>
      <div className='inicioColaboradores'>
        <strong>Colaboradores</strong>
        <p className='textoColaboradores'>Nuestros colaboradores son el corazón de Restart Ocean. Gracias a su compromiso, no solo impulsan nuestras iniciativas, sino que también nos inspiran a seguir adelante. Son expertos, voluntarios y entusiastas que, con sus conocimientos y pasión, logran que cada proyecto sea una oportunidad para proteger y restaurar la vida marina en Chile. Su trabajo es el motor que nos mueve a crear conexiones significativas entre la comunidad y las causas oceánicas, asegurando que cada acción tenga un impacto positivo y duradero en nuestros mares.</p>
      </div>
      <div className='carrColaboradores'>
        <Carousel/>
      </div>
    </>
  )
}

export default Colaboradores
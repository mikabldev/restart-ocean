import React from 'react'
import Carousel from '../components/Carrusel/Carrusel-colab'
import '../components/Carrusel/Colaboradores.css'

const Colaboradores = () => {
  return (
    <>
      <div className='containerTexto'>
        <div className='tContainer'>
          <h2 className='tituloColab'>Conoce a nuestros colaboradores</h2>
        </div>
        <div className='textContainer'>
          <p className='textoColab'><strong>Estas organizaciones, fundaciones y empresas son el corazón de Restart Ocean.</strong> Gracias a su compromiso, no solo impulsan y potencian nuestras iniciativas, sino que también nos inspiran a seguir adelante. Son expertos, voluntarios y entusiastas que, con sus conocimientos y pasión, logran que cada proyecto sea una oportunidad para proteger y restaurar la vida marina en Chile. Su trabajo es el motor que nos mueve a crear conexiones significativas entre la comunidad y las causas ambientales oceánicas, asegurando que cada acción tenga un impacto positivo y duradero en nuestras costas. Visita sus plataformas y sumérgete en un mar de conocimiento con los recursos que tienen disponibles.</p>
        </div>
      </div>
      <div className='carrColaboradores'>
        <Carousel />
      </div>
    </>
  )
}

export default Colaboradores
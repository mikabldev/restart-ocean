import { ReactComponent as ChileSVG } from './ChileSVG.svg';
import { useState } from 'react';
import './Mapa.css';
import regiones from './regiones.json';

const MapaSVG = () => {
  const [hoveredRegionId, setHoveredRegionId] = useState(null);
  const [showPopUp, setShowPopUp] = useState(false);

  const handleClick = (e) => {
    const regionId = e.target.getAttribute('id');
    console.log("Region id:", regionId);

    const regionInfo = regiones[regionId];
    if (regionInfo) {
      setHoveredRegionId(regionId);
      setShowPopUp(true);
    }
  };

  const handleClosePopup = () => {
    setHoveredRegionId(null);
    setShowPopUp(false);
  };

  const regionInfo = hoveredRegionId ? regiones[hoveredRegionId] : null;

  return (
    <div className='MapContainer'>
      <div className='tituloMapa'>
        <h6>Áreas Marinas Protegidas</h6>
      </div>
      <div className='mainContent'>
        <div className='infoMapaContainer'>
          <h4><strong>¿Qué son las áreas Marinas protegidas?</strong></h4>
          <p>Son espacios geográficos específicos, reconocidos y gestionados mediante mecanismos
          legales, cuyo objetivo es la conservación de la naturaleza. Las AMP buscan
          mantener la biodiversidad, proporcionar refugio a especies comerciales y/o en peligro de
          extinción, proteger hábitats críticos y de reproducción, y construir resiliencia contra 
          el cambio climático.</p>
          <p>¡En esta sección podrás conocer cuáles son las <strong>Áreas Marinas Protegidas de Chile! </strong> 
          Para ello, haz <strong>CLICK</strong> en cada región, y podrás visualizarlas.</p>
          <p>En Chile, existen cuatro tipos de AMP:</p>
      <ol>
        <li>
        <h4><strong>Área Marina Costera Protegida de Múltiples Usos:</strong></h4>
          <p>Favorece la conservación de la biodiversidad, protección de especies marinas en peligro,
            reducir conflictos de uso, generar investigación, educación y actividades comerciales y
            recreativas sostenibles. Conservan el patrimonio histórico-cultural marino y costero de 
            comunidades locales. Están a cargo del Ministerio del Medio Ambiente
          </p>
        </li>

        <li>
          <h4><strong>Santuario de la Naturaleza:</strong></h4>
          <p>Sitios con potencial para estudios geológicos, paleontológicos, zoológicos, botánicos o ecológicos.
          En ellos se pueden realizar actividades de observación, investigación y educación, previamente autorizadas.
          Se enceuntran bajo la gestión de Monumentos Nacionales y el Ministerio del Medio Ambiente.</p>
        </li>

        <li>
        <h4><strong>Parque Marino:</strong></h4>
          <p>Área destinada a preservar unidades ecológicas de interés científico y/o patrimonio natural. 
            Se prioriza la mantención y diversidad de especies hidrobiológicas y su hábitat. En estos, 
            no se puede realizar ninguna actividad, salvo aquellas autorizadas para investigación. 
            Están a cargo de SERNAPESCA.
          </p>
        </li>

        <li>
        <h4><strong>Reserva Marina:</strong></h4>
          <p>Área de conservación de recursos hidrobiológicos, las cuales protegen zonas 
            de reproducción y hábitat de especies claves para la actividad económica de las 
            regiones y el país. Sólo se pueden realizar actividades según el Plan general de 
            Administración que tengan, las cuales solo podrán tener propósitos de observación, 
            investigación y extractivas autorizadas por períodos específicos. Están a cargo de SERNAPESCA.
          </p>
        </li>
      </ol>
      <p>
        Estas AMP son fundamentales para la protección del entorno marino de Chile, contribuyendo
         a la sostenibilidad y preservación del medio ambiente marino.
      </p>
        </div>
        <div className="svgContainer">
          <ChileSVG
            onClick={handleClick}
          />
          {showPopUp && regionInfo && (
            <div
              className="infoPopup">
              <button className="closeButton" onClick={handleClosePopup}>X</button>
              <h2>{regionInfo.nombre}</h2>
              {regionInfo.areas.map((area, index) => (
                <div key={index} className='areaContainer'>
                  <div className='textContainer'>
                    <h5><u>Localidad: {area.localidad}</u></h5>
                    <p><strong>Tipo de Protección:</strong> {area.proteccion || 'N/A'}</p>
                    <p><strong>Objetivo:</strong> {area.objetivo}</p>
                  </div>
                  {area.imagen && (
                    <div className='imagenContainer'>
                      <img src={`/${area.imagen}`} alt={`Imagen del área ${area.localidad}`} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MapaSVG;

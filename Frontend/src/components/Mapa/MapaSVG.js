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
              <div key={index}>
                <h5><u>Localidad: {area.localidad}</u></h5>
                <p><strong>Tipo de Protección:</strong> {area.proteccion || 'N/A'}</p>
                <p><strong>Objetivo:</strong> {area.objetivo}</p>
                {area.imagen && <img src={`/${area.imagen}`} alt={`Imagen del área ${area.localidad}`} />}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MapaSVG;

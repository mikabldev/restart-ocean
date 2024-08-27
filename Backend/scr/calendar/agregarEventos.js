import fetch from 'node-fetch';

async function agregarEventos() {
  const nuevoEvento = {
    title: "Limpieza de playa",
    description: "Reunión de equipo de voluntario en playa las cruces",
    start: "2024-09-01T15:00:00",
    end: "2024-09-01T17:00:00",
    usuario_id: 1
  };

  try {
    const response = await fetch('http://localhost:3005/calendario/eventos/agregar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevoEvento)
    });
    const data = await response.json();
    console.log('Evento agregado:', data);
  } catch (error) {
    console.error('Error al agregar el evento:', error);
  }
}

agregarEventos();

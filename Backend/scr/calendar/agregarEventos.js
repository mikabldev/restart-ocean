import fetch from 'node-fetch';

async function agregarEventos() {
  const nuevoEvento = {
    title: "Encuentro anual 'Pesca sostenible en la V región'",
    description: "Encuentro realizado a partir de expertos, para entregar a la comunidad la importancia sobre la pesca sostenible, y su aporte económico y ecológico para la zona.",
    start: "2024-09-28T11:00:00",
    end: "2024-09-28T12:00:00",
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

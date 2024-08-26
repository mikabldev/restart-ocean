import express from 'express';
import { obtenerEventoId, eliminarEvento, crearEvento, obtenerEventos } from '../models/models.calendario.js'; 
import { authToken } from '../middlewares/authToken.js'; 

const router = express.Router();

// Ruta para obtener todos los eventos
router.get('/calendario', async (req, res) => {
    try {
      const eventos = await obtenerEventos();
      res.json(eventos);
    } catch (error) {
      res.status(500).json({ error: 'Error en el servidor al traer los datos del evento.' });
    }
  });
  
  // Ruta para obtener un evento por ID
  router.get('/calendario/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const evento = await obtenerEventoId(id);
      if (evento) {
        res.json(evento);
      } else {
        res.status(404).json({ error: 'Evento no encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error en el servidor al obtener el evento.' });
    }
  });
  
  // Ruta para crear un evento (solo usuarios autenticados)
  router.post('/calendario/eventos', authToken, async (req, res) => {
    try {
      const evento = req.body;
      const nuevoEvento = await crearEvento(evento);
      res.status(201).json(nuevoEvento);
    } catch (error) {
      res.status(500).json({ error: 'Error en el servidor al crear el evento' });
    }
  });
  
  // Ruta para eliminar un evento (solo usuarios autenticados)
  router.delete('/calendario/:id', authToken, async (req, res) => {
    try {
      const { id } = req.params;
      const { usuario } = req; // Asegúrate de que el middleware authToken agrega el usuario a la solicitud
      const evento = await obtenerEventoId(id);
  
      if (!evento) {
        return res.status(404).json({ error: 'Evento no encontrado.' });
      }
  
      // Verifica si el usuario es admin o el propietario del evento
      if (usuario.admin || evento.id_usuario === usuario.id) {
        await eliminarEvento(id);
        res.status(204).end();
      } else {
        res.status(403).json({ error: 'No tienes permiso para eliminar este evento.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error en el servidor al eliminar el evento' });
    }
  });
  
  export default router;
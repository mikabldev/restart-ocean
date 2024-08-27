import express from 'express';
import fs from 'fs';

const router = express.Router();

// Ruta para obtener los eventos
router.get('/eventos', (req, res) => {
  const eventos = JSON.parse(fs.readFileSync('eventos.json', 'utf8'));
  res.status(200).json(eventos);
});

// Ruta para agregar eventos
router.post('/eventos/agregar', (req, res) => {
  const evento = req.body;

  // Lee el archivo JSON existente
  const data = JSON.parse(fs.readFileSync('eventos.json', 'utf8'));

  // Agrega el nuevo evento
  data.push(evento);

  // Escribe los datos actualizados en el archivo JSON
  fs.writeFileSync('eventos.json', JSON.stringify(data, null, 2));

  res.status(201).json(data)({ message: 'Evento guardado exitosamente' });
});

export default router;

import { db } from '../database/dbConection.js'

export const registrarComentario = async ({ title, content, usuarioId }) => {
  console.log('desde registrar comentario: ', title, content, usuarioId)

  const query = 'INSERT INTO posts (titulo, contenido, usuario_id) VALUES ($1, $2, $3) RETURNING *'
  const values = [title, content, usuarioId]
  const { rowCount } = await db(query, values)

  if (!rowCount) {
    const newError = { code: 500, message: 'No se pudo registrar el comentario, por favor intente más tarde' }
    throw newError
  }
}

export const getPost = async () => {
  try {
    const query = 'SELECT * FROM posts ORDER BY fecha_creacion DESC;'
    const { rows } = await db(query)
    return rows
  } catch (error) {
    throw new Error('Error al obtener los post')
  }
}

import { db } from '../database/dbConection.js'

export const registrarComentario = async ({ title, content, usuario_id }) => {
  console.log('desde registrar comentario: ', title, content, usuario_id)

  const query = 'INSERT INTO posts (titulo, contenido, usuario_id) VALUES ($1, $2, $3) RETURNING *'
  const values = [title, content, usuario_id]
  const { rowCount } = await db(query, values)

  if (!rowCount) {
    const newError = { code: 500, message: 'No se pudo registrar el comentario, por favor intente más tarde' }
    throw newError
  }
}

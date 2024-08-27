import { db } from '../database/dbConection.js'

export const registrarComentario = async ({ title, content }) => {
  console.log('desde registrar comentario: ', title, content)

  const query = 'INSERT INTO posts (titulo, contenido) VALUES ($1, $2) RETURNING *'
  const values = [title, content]
  const { rowCount } = await db(query, values)

  if (!rowCount) {
    const newError = { code: 500, message: 'No se pudo registrar el comentario, por favor intente más tarde' }
    throw newError
  }
}

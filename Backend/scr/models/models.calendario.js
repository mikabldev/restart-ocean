import { db } from '../database/dbConection.js'
//modelos
export const obtenerEventos = async () => {
    try {
        const query = 'SELECT * FROM calendario';
        const result = await db(query);
        return result.rows;
    } catch (error) {
        console.error('Error en la consulta de eventos:', error);
        throw error;
    }
};

export const obtenerEventoId = async (id) => {
    const resultado = await db('SELECT * FROM calendario WHERE id = $1', [id]);
    return resultado.rows[0];
};
export const crearEvento = async (evento) => {
    const { titulo_evento, descripcion, fecha_inicio, fecha_final, id_usuario } = evento;
    const resultado = await db(
        'INSERT INTO calendario  (titulo_evento, descripcion, fecha_inicio, fecha_final, id_usuario) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [titulo_evento, descripcion, fecha_inicio, fecha_final, id_usuario]
    );
    return resultado.rows[0]
};
export const eliminarEvento = async (id) => {
    await db('DELETE FROM calendario  WHERE id = $1', [id]);
};




import { isAdmin } from '../models/models.users.js';

export const verifyAdmin = async (req, res, next) => {
  try {
    if (!req.usuario || !req.usuario.userId) {
      return res.status(401).json({ message: 'Usuario no autenticado' });
    }

    const userId = req.usuario.userId;
    const admin = await isAdmin(userId);

    if (admin) {
      next();
    } else {
      return res.status(403).json({ message: 'No tiene permisos de administrador' });
    }
  } catch (error) {
    console.error('Error al verificar rol de admin:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

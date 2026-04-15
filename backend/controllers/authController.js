import pool from '../config/db.js';

export const login = async (req, res) => {
    try {
        const { usuario, password } = req.body;

        if (!usuario || !password) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Todos los campos son obligatorios para ingresar'
            });
        }

        const query = `
            SELECT * FROM usuarios
            WHERE (usuario = $1 OR correo = $1) AND password = $2
        `;

        const values = [usuario, password];
        const result = await pool.query(query, values);

        if (result.rows.length === 0) {
            return res.status(401).json({
                ok: false,
                mensaje: 'Credenciales incorrectas'
            });
        }

        const usuarioEncontrado = result.rows[0];

        return res.json({
            ok: true,
            mensaje: 'Acceso permitido',
            usuario: {
                id: usuarioEncontrado.id,
                usuario: usuarioEncontrado.usuario,
                correo: usuarioEncontrado.correo
            }
        });
    } catch (error) {
        console.error('Error en login:', error.message);
        return res.status(500).json({
            ok: false,
            mensaje: 'Error interno del servidor'
        });
    }
};
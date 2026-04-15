import pool from '../config/db.js';

// GET /perfil/:usuario_id
export const obtenerPerfil = async (req, res) => {
    try {
        const { usuario_id } = req.params;

        const query = `
            SELECT 
                p.id,
                p.usuario_id,
                p.nombre,
                p.apellido,
                p.edad,
                p.telefono,
                u.usuario,
                u.correo
            FROM perfil p
            INNER JOIN usuarios u ON p.usuario_id = u.id
            WHERE p.usuario_id = $1
        `;

        const result = await pool.query(query, [usuario_id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Perfil no encontrado' });
        }

        res.json(result.rows[0]);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error del servidor' });
    }
};

// PUT /perfil/:usuario_id
export const actualizarPerfil = async (req, res) => {
    try {
        const { usuario_id } = req.params;
        const { nombre, apellido, edad, telefono } = req.body;

        // Validación básica
        if (!nombre || !apellido || !edad || !telefono) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        const query = `
            UPDATE perfil
            SET nombre = $1,
                apellido = $2,
                edad = $3,
                telefono = $4
            WHERE usuario_id = $5
            RETURNING *;
        `;

        const values = [nombre, apellido, edad, telefono, usuario_id];

        const result = await pool.query(query, values);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Perfil no encontrado' });
        }

        res.json({
            message: 'Perfil actualizado correctamente',
            perfil: result.rows[0]
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error del servidor' });
    }
};
import pool from '../config/db.js';

export const registrarUsuario = async (req, res) => {
    try {
        const { usuario, correo, password, nombre, apellido, edad, telefono } = req.body;

        if (!usuario || !correo || !password || !nombre || !apellido || !edad || !telefono) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        const usuarioQuery = `
            INSERT INTO usuarios (usuario, correo, password)
            VALUES ($1, $2, $3)
            RETURNING id;
        `;

        const usuarioValues = [usuario, correo, password];
        const usuarioResult = await pool.query(usuarioQuery, usuarioValues);

        const usuario_id = usuarioResult.rows[0].id;

        const perfilQuery = `
            INSERT INTO perfil (usuario_id, nombre, apellido, edad, telefono)
            VALUES ($1, $2, $3, $4, $5);
        `;

        const perfilValues = [usuario_id, nombre, apellido, edad, telefono];
        await pool.query(perfilQuery, perfilValues);

        res.status(201).json({ message: 'Usuario y perfil creados correctamente' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error del servidor' });
    }
};
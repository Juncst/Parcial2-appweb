import express from 'express';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';
import registroRoutes from './routes/registroRoutes.js';
import perfilRoutes from './routes/perfilRoutes.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Las rutas
app.use('/auth', authRoutes);
app.use('/registro', registroRoutes);
app.use('/perfil', perfilRoutes);

// ruta principal
app.get('/', (req, res) => {
    res.send('Backend funcionando');
});

// Servidor y puerto
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
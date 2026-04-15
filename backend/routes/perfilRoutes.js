import express from 'express';
import { obtenerPerfil, actualizarPerfil } from '../controllers/perfilController.js';

const router = express.Router();

router.get('/:usuario_id', obtenerPerfil);
router.put('/:usuario_id', actualizarPerfil);

export default router;
import express from 'express';
const router = express.Router();
import taskRoutes from './taskRoutes.js'

router.use('/api/tasks', taskRoutes);

export default router;

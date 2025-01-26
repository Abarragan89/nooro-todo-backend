import express, { type Request, type Response } from 'express';
import { prisma } from '../utils/prisma.js';
const router = express.Router();

// This API route ("/api/tips") is a GET Route for retrieving all the tips
router.get('/', async (req: Request, res: Response) => {
    const tasks = await prisma.task.findMany({});
    console.log(tasks)

    res.json('send').status(200)

});

// This API route ("/api/tips") is a POST Route for a new UX/UI tip
router.post('/', async (req: Request, res: Response) => {
    const { username, topic, tip } = req.body;
});

export default router;

import express, { type Request, type Response } from "express";
import { prisma } from "../utils/prisma.js";
const router = express.Router();

// Get all Tasks
router.get("/", async (_req: Request, res: Response) => {
    try {
        const tasks = await prisma.task.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        res.json(tasks).status(200)
    } catch (error) {
        console.log("error getting tasks", error)
        res.json(error).status(500)
    }
});

// Get Single Task
router.get("/:taskId", async (req: Request, res: Response) => {
    try {
        const tasks = await prisma.task.findUnique({
            where: { id: req.params.taskId}
        });
        res.json(tasks).status(200)
    } catch (error) {
        console.log("error getting tasks", error)
        res.json(error).status(500)
    }
});

// Create new Task
router.post("/", async (req: Request, res: Response) => {
    try {
        const { taskTitle, taskColor } = req.body;
        // Check if task name was given
        if (!taskTitle) {
            res.json({message: "task name required"}).status(400)
            return
        }
        // Create new Task
        const newTask = await prisma.task.create({
            data: {
                title: taskTitle,
                color: taskColor
            }
        })
        // Send status 200 if task was created
        if (newTask) {
            res.json(newTask).status(200)
        }
    } catch (error) {
        console.log("error adding new task", error)
        res.json(error).status(500)
    }
});

router.put("/:taskId",  async (req: Request, res: Response) => {
    try {
        const {taskTitle, taskColor, isComplete} = req.body;
        // Check if required data is given
        if (!taskTitle) {
            res.json({message: 'task title required'}).status(400)
            return
        }
        const updatedTask = await prisma.task.update({
            where: {
                id: req.params.taskId
            },
            data: {
                title: taskTitle,
                color: taskColor,
                isComplete,
            }
        })
        if (updatedTask) {
            res.json(updatedTask).status(200)
        }
    } catch (error) {
        console.log("error updating task ", error)
        res.json(error).status(500)
    }
})

router.delete("/:taskId",  async (req: Request, res: Response) => {
    try {
        const updatedTask = await prisma.task.delete({
            where: {
                id: req.params.taskId
            }
        })
        if (updatedTask) {
            res.json(updatedTask).status(200)
        }
    } catch (error) {
        console.log("error updating task ", error)
        res.json(error).status(500)
    }
})


export default router;

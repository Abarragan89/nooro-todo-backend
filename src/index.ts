import express, { Express } from "express";
import allRoutes from "./routes/index.js"
import cors from "cors";

const app: Express = express();
const port = 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use CORS middleware
app.use(cors({
    origin: 'http://localhost:3000'
}));

// Serves API routes from allRoutes module
app.use(allRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
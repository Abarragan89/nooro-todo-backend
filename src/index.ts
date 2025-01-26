import express, { Express } from "express";
import allRoutes from './routes/index.js'

const app: Express = express();
const port = 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serves API routes from allRoutes module
app.use(allRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
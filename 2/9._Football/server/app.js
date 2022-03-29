import express from "express";
const app = express();

import playersRouter from "./routers/playersRouter.js"
app.use(playersRouter);

import cors from "cors";
app.use(cors());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Starting server on port:", PORT);
});
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import Router from "./routes/index.js";
import { PORT } from "./config/index.js";

const server = express();
server.use(cors());
server.disable("x-powered-by"); //Reduce fingerprinting
server.use(cookieParser());
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

Router(server);

server.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
);
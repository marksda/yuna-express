import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { indexRouter } from "./routes/index.js";
// import mongoose from "mongoose";
import { PORT, URI } from "./config/index.js";
// import User from "./models/User.js";

const server = express();
server.use(cors());
server.disable("x-powered-by"); 
server.use(cookieParser());
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use("/api/v1", indexRouter);

// mongoose.Promise = global.Promise;
// mongoose.set("strictQuery", false);
// mongoose.connect(URI)
//   .then(
//     () => console.log("Connected to database")
//   )
//   .catch((err) => console.log(err));

//   const newUser = new User({
//     first_name: 'syaiful',
//     last_name: 'dwi anwar',
//     email: 'vlacl123@gmail.com',
//     password: '123',
//     role: 'admin'
//   });

//   await newUser.save();

server.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
);
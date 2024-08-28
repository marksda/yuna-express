import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import cors from "cors";
import cookieParser from "cookie-parser";
import { restRouter } from "./routes/rest_router.js";
import { viewRouter } from "./routes/view_router.js";
import { PORT } from "./config/index.js";

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.disable("x-powered-by"); 
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// rest router
app.use("/api/v1", restRouter);
// view router
app.use("/", viewRouter);

//load view engine
// app.locals.cache = true;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


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

app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
);
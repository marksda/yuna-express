import { Router } from "express";
import { Index, Masuk } from "../controllers/view.js";
import { Verify } from "../middleware/verify.js";

const viewRouter = new Router();

// viewRouter.get('/', async (_req, res) => {
//     res.render('index.pug', { title: 'CSO', pengumuman: true });
// });

viewRouter.get('/', Verify, Index);
viewRouter.get('/masuk', Verify, Masuk);

export {viewRouter};
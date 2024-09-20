import { Router } from "express";
import { Index, Masuk } from "../controllers/view.js";

const viewRouter = new Router();

// viewRouter.get('/', async (_req, res) => {
//     res.render('index.pug', { title: 'CSO', pengumuman: true });
// });

viewRouter.get('/', Index);
viewRouter.get('/masuk', Masuk);

export {viewRouter};
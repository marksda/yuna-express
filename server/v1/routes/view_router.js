import { Router } from "express";
import { Index } from "../controllers/view.js";

const viewRouter = new Router();

// viewRouter.get('/', async (_req, res) => {
//     res.render('index.pug', { title: 'CSO', pengumuman: true });
// });

viewRouter.get('/', Index);

export {viewRouter};
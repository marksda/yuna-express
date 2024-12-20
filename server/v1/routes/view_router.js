import { Router } from "express";
import { Beranda, Index, Keluar, Masuk } from "../controllers/view.js";
import { Verify } from "../middleware/verify.js";

const viewRouter = new Router();

// viewRouter.get('/', async (_req, res) => {
//     res.render('index.pug', { title: 'CSO', pengumuman: true });
// });

viewRouter.get('/', Verify, Index);
viewRouter.get('/beranda', Verify, Beranda);
viewRouter.get('/masuk', Verify, Masuk);
viewRouter.get('/keluar', Verify, Keluar);

export {viewRouter};
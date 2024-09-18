import { Router } from "express";

const viewRouter = new Router();

viewRouter.get('/', async (_req, res) => {
    res.render('index.pug', { title: 'CSO', pengumuman: true });
});

export {viewRouter};
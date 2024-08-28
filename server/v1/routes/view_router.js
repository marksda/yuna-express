import { Router } from "express";

const viewRouter = new Router();

viewRouter.get('/', async (_req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello crut there!' });
});

export {viewRouter};
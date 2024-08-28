import { Router } from "express";

const indexRouter = new Router();

indexRouter.get('/', async (_req, res) => {
    res.send('API is working properly');
});

export {indexRouter};
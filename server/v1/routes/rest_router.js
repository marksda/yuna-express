import { Router } from "express";

const restRouter = new Router();

restRouter.get('/', async (_req, res) => {
    res.send('API is working properly');
});

export {restRouter};
// module.exports = restRouter ;
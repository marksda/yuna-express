import { Router } from "express";
// import path from "path";
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url); 
// const __dirname = path.dirname(__filename);

const viewRouter = new Router();

// viewRouter.get('/', async (_req, res) => {
//     res.sendFile('index.html', {
//         root: path.join(__dirname, '../public')
//     });
// });

viewRouter.get('/', async (_req, res) => {
    res.render('index.pug', { title: 'CSO', pengumuman: true });
});

export {viewRouter};
import { Router } from "express";
import { check } from "express-validator";
import Validate from "../middleware/validate.js";
import { Register } from "../controllers/auth.js";

const restRouter = new Router();

restRouter.get('/', async (_req, res) => {
    res.send('API is working properly');
});

restRouter.post(
    '/auth/register',
    check("email")
        .isEmail()
        .withMessage("Masukkan alamat email yang sesuai aturan penulisan email"),
    check("first_name")
        .not()
        .isEmpty()
        .withMessage("nama depan harus diisi")
        .trim()
        .escape(),
    check("last_name")
        .not()
        .isEmpty()
        .withMessage("nama akhir harus diisi")
        .trim()
        .escape(),
    check("password")
        .notEmpty()
        .isLength({ min: 3 })
        .withMessage("panjang password minimal 3 karakter"),
    Validate,
    Register
);

export {restRouter};
// module.exports = restRouter ;
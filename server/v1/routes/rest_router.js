import { Router } from "express";
import { check } from "express-validator";
import Validate from "../middleware/validate.js";
import { Login, Logout, Register, Token } from "../controllers/auth.js";
import { Verify, VerifyRole } from "../middleware/verify.js";
import { AddItem } from "../controllers/item.controller.js";

const restRouter = new Router();

restRouter.get('/', Verify, async (req, res) => {
    res.status(200).json({
        status: "success",
        data: req.user,
        message: "API is working properly",
    });
});

restRouter.get('/user', Verify, VerifyRole, async (_req, res) => {
    res.status(200).json({
        status: "success",
        message: "Selamat dtang di portal admin.",
    });
});

restRouter.post('/auth/register',
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

restRouter.post('/auth/login',
    check("email")
        .isEmail()
        .withMessage("Masukkan alamat email yang sesuai aturan penulisan email"),
    check("password")
        .not()
        .isEmpty(),
    Validate,
    Login
);

restRouter.get('/auth/logout', Logout);

restRouter.post('/token',
    check("email")
        .isEmail()
        .withMessage("Masukkan alamat email yang sesuai aturan penulisan email"),
    check("password")
        .not()
        .isEmpty(),
    Validate,
    Token
);

// restRouter.get('/item', Item);

restRouter.post('/item', 
    check("kode")
        .not()
        .isEmpty()
        .withMessage("kode harus diisi")
        .trim()
        .escape(),
    check("title")
        .not()
        .isEmpty()
        .withMessage("kode harus diisi")
        .trim()
        .escape(),
    Validate,
    AddItem
);

export {restRouter};
// module.exports = restRouter ;
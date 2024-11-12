import { Router } from "express";
import { check } from "express-validator";
import Validate from "../middleware/validate.js";
import { Login, Logout, Register, Token } from "../controllers/auth.js";
import { Verify, VerifyRole } from "../middleware/verify.js";
import { AddItem, GetItem } from "../controllers/item.controller.js";
import { AddPropinsi, GetPropinsi } from "../controllers/propinsi.controller.js";
import { AddKabupaten, GetKabupaten } from "../controllers/kabupaten.controller.js";
import { AddKecamatan, GetKecamatan } from "../controllers/kecamatan.controller.js";
import { AddModelPerizinan, GetModelPerizinan } from "../controllers/model-perizinan.controller.js";
import { AddDesa, GetDesa } from "../controllers/desa.controller.js";
import { AddSkalaUsaha, GetSkalaUsaha } from "../controllers/skala-usaha.controller.js";

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

restRouter.get('/item', Verify, GetItem);

restRouter.post('/item',     
    Verify,
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

restRouter.get('/propinsi', Verify, GetPropinsi);

restRouter.post('/propinsi',     
    Verify,
    check("kode")
        .not()
        .isEmpty()
        .withMessage("kode harus diisi")
        .trim()
        .escape(),
    check("nama")
        .not()
        .isEmpty()
        .withMessage("nama harus diisi")
        .trim()
        .escape(),
    Validate,
    AddPropinsi
);

restRouter.get('/kabupaten', Verify, GetKabupaten);

restRouter.post('/kabupaten',     
    Verify,
    check("kode")
        .not()
        .isEmpty()
        .withMessage("kode harus diisi")
        .trim()
        .escape(),
    check("nama")
        .not()
        .isEmpty()
        .withMessage("nama harus diisi")
        .trim()
        .escape(),
    check("propinsi")
        .not()
        .isEmpty()
        .withMessage("propinsi harus diisi")
        .trim()
        .escape(),
    Validate,
    AddKabupaten
);

restRouter.get('/kecamatan', Verify, GetKecamatan);

restRouter.post('/kecamatan',     
    Verify,
    check("kode")
        .not()
        .isEmpty()
        .withMessage("kode harus diisi")
        .trim()
        .escape(),
    check("nama")
        .not()
        .isEmpty()
        .withMessage("nama harus diisi")
        .trim()
        .escape(),
    check("propinsi")
        .not()
        .isEmpty()
        .withMessage("propinsi propinsi harus diisi")
        .trim()
        .escape(),
    check("kabupaten")
        .not()
        .isEmpty()
        .withMessage("kabupaten harus diisi")
        .trim()
        .escape(),
    Validate,
    AddKecamatan
);

restRouter.get('/desa', Verify, GetDesa);

restRouter.post('/desa',     
    Verify,
    check("kode")
        .not()
        .isEmpty()
        .withMessage("kode harus diisi")
        .trim()
        .escape(),
    check("nama")
        .not()
        .isEmpty()
        .withMessage("nama harus diisi")
        .trim()
        .escape(),
    check("propinsi")
        .not()
        .isEmpty()
        .withMessage("propinsi harus diisi")
        .trim()
        .escape(),
    check("kabupaten")
        .not()
        .isEmpty()
        .withMessage("kabupaten harus diisi")
        .trim()
        .escape(),
    check("kecamatan")
        .not()
        .isEmpty()
        .withMessage("kecamatan harus diisi")
        .trim()
        .escape(),
    Validate,
    AddDesa
);

restRouter.get('/model_perizinan', Verify, GetModelPerizinan);

restRouter.post('/model_perizinan',     
    Verify,
    check("nama")
        .not()
        .isEmpty()
        .withMessage("nama harus diisi")
        .trim()
        .escape(),
    check("singkatan")
        .not()
        .isEmpty()
        .withMessage("singkatan harus diisi")
        .trim()
        .escape(),
    Validate,
    AddModelPerizinan
);

restRouter.get('/skala_usaha', Verify, GetSkalaUsaha);

restRouter.post('/skala_usaha',     
    Verify,
    check("nama")
        .not()
        .isEmpty()
        .withMessage("nama harus diisi")
        .trim()
        .escape(),
    check("singkatan")
        .not()
        .isEmpty()
        .withMessage("singkatan harus diisi")
        .trim()
        .escape(),
    Validate,
    AddSkalaUsaha
);

export {restRouter};
// module.exports = restRouter ;
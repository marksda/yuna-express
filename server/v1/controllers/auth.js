import User from "../models/User.js";

/**
 * @route POST /api/v1/auth/register
 * @desc Registers a user
 * @access Public
 */
export async function Register(req, res) {
    // get required variables from request body
    // using es6 object destructing
    const { first_name, last_name, email, password } = req.body;

    try {
        // create an instance of user
        const newUser = new User({
            first_name,
            last_name,
            email,
            password
        })
        // check if user already exist
        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({
                status: "gagal",
                data: [],
                message: "Akun sudah ada pada sistem, silahkan masuk saja."
            });
        }
        const savedUser = await newUser.save();  // save new user into database
        const { password: pwd, role, ...user_data } = savedUser._doc;
        res.status(200).json({
            status: "sukses",
            data: [user_data],
            message:
                "Terimakasih atas pendaftaran anda ke sistem kami. Akun anda berhasil dibuat.",
        });
    } catch (error) {
        res.status(500).json({
            status: "gagal",
            code: 500,
            data: [],
            message: "server mengalami kegagalan internal",
        });
    }

    res.end();
}


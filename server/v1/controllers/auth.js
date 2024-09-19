import User from "../models/User.js";
import bcrypt from "bcrypt";

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
            message: "server mengalami kegagalan internal"
        });
    }

    res.end();
}

/**
 * @route POST /api/v1/auth/login
 * @desc logs in a user
 * @access Public
 */
export async function Login(req, res) {
    // Get variables for the login process
    const { email } = req.body;
    try {
        // Check if user exists
        const user = await User.findOne({ email }).select("+password");
        if(!user) {
            return res.status(401).json({
                status: "gagal",
                data: [],
                message: "Email atau password tidak valid. Coba lagi dengan memasukkan kredential yang benar."
            });
        }
        // if user exists
        // validate password
        const isPasswordValid = await bcrypt.compare(
            `${req.body.password}`,
            user.password
        );
        // if not valid, return unathorized response
        if (!isPasswordValid) {
            return res.status(401).json({
                status: "gagal",
                data: [],
                message: "Email atau password tidak valid. Coba lagi dengan memasukkan kredential yang benar."
            });
        }

        let options = {
            maxAge: 20 * 60 * 1000, // would expire in 20minutes
            httpOnly: true, // The cookie is only accessible by the web server
            secure: true,
            sameSite: "None",
        };

        const token = user.generateAccessJWT(); // generate session token for user
        res.cookie("SessionID", token, options); // set the token to response header, so that the client sends it back on each subsequent request
        const { password, ...user_data } = user._doc;
        res.status(200).json({
            status: "sukses",
            data: [user_data],
            message: "Anda berhasil logged in.",
        });

        // return user info except password
        // const { password, ...user_data } = user._doc;
        // res.status(200).json({
        //     status: "sukses",
        //     data: [user_data],
        //     message: "Anda berhasil logged in.",
        // });
    } catch (error) {
        res.status(500).json({
            status: "gagal",
            code: 500,
            data: [],
            message: "server mengalami kegagalan internal"
        });
    }
    res.end();
}
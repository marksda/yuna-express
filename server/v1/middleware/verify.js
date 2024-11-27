import User from "../models/User.js";
import Blacklist from "../models/Blacklist.js";
import jwt from "jsonwebtoken";
import { SECRET_ACCESS_TOKEN } from '../config/index.js';
import { BlacklistServices } from "../services/utils-services.js";

export async function Verify(req, res, next) {     
    let userAgent =  req.headers["user-agent"];
    let accessToken = null;
    let checkIfBlacklisted = null;
    let isBrowser = userAgent ? true:false;

    if(!isBrowser) {   //client non browser
        try {
            authHeader = req.headers["authorization"];
            if(authHeader == undefined) {
                return res.status(401).json({
                    status: "failed",
                    message: "You are not authorized to view this page.",
                });
            }

            accessToken = authHeader.split(" ")[1];
            checkIfBlacklisted = await Blacklist.findOne({ token: accessToken }); // Check if that token is blacklisted

            // if true, send an unathorized message, asking for a re-authentication.
            if (checkIfBlacklisted) {
                return res.status(401).json({ message: "This session has expired. Please login" });
            }  

            // if token has not been blacklisted, verify with jwt to see if it has been tampered with or not.
            // that's like checking the integrity of the accessToken
            jwt.verify(accessToken, SECRET_ACCESS_TOKEN, async (err, decoded) => {
                if (err) {
                    // if token has been altered or has expired, return an unauthorized error
                    return res.status(401).json({ message: "This session has expired. Please login" });
                }

                const { id } = decoded; // get user id from the decoded token
                const user = await User.findById(id); // find user by that `id`
                const { password, ...data } = user._doc; // return user object without the password
                req.user = data; // put the data object into req.user
                next();
            });          
        } catch (error) {
            res.status(500).json({
                status: "error",
                code: 500,
                data: [],
                message: "Internal Server Error",
            });
        }
    }
    else {
        try {
            let cookie = req.headers["cookie"];
            if( cookie == undefined) {
                req.statusVerify = false;
                next();
            }
            else {
                const cookies = req.headers["cookie"].split(';');
                let tmp = null;

                for (let i of cookies) {
                    tmp = i.split("=");
                    if(tmp[0] == "SessionID") {
                        accessToken = tmp[1];
                        break;
                    }
                }

                if(accessToken == null) {
                    req.statusVerify = false;
                    next();
                }
                else {
                    checkIfBlacklisted = await BlacklistServices(accessToken);

                    if (checkIfBlacklisted) {
                        req.statusVerify = false;
                        next();
                    }
                    else {
                        jwt.verify(accessToken, SECRET_ACCESS_TOKEN, async (err, decoded) => {
                            if (err) {
                                req.statusVerify = false;
                                next();
                            }
                            else {
                                const { id } = decoded; // get user id from the decoded token
                                const user = await User.findById(id); // find user by that `id`
                                const { _id, password, ...data } = user._doc; // return user object without the password
                                req.statusVerify = true;
                                req.accessToken = accessToken;
                                req.user = data; // put the data object into req.user
                                next();
                            }                        
                        }); 
                    }
                }
            }
        } catch (error) {
            res.status(500).json({
                status: "error",
                code: 500,
                data: [],
                message: "Internal Server Error",
            });
        }
    }
}

export function VerifyRole(req, res, next) {
    try {
        const user = req.user; // we have access to the user object from the request
        const { role } = user; // extract the user role
        // check if user has no advance privileges
        // return an unathorized response
        if (role !== "0x88") {
            return res.status(401).json({
                status: "failed",
                message: "You are not authorized to view this page.",
            });
        }
        next(); // continue to the next middleware or function
    } catch (err) {
        res.status(500).json({
            status: "error",
            code: 500,
            data: [],
            message: "Internal Server Error",
        });
    }
}
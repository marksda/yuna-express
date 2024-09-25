import Blacklist from "../models/Blacklist.js";

export async function BlacklistServices(accessToken) {
    try {
        const checkIfBlacklisted = await Blacklist.findOne({ token: accessToken }); // Check if that token is blacklisted
        if (checkIfBlacklisted) 
            return true;
        else
            return false;
    } catch (error) {
        return false;
    }
}
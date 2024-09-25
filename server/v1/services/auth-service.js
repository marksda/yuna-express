import Blacklist from "../models/Blacklist.js";
import { BlacklistServices } from "./utils-services.js";

export async function LogoutService(accessToken) {
    try {
        const isBlackListed = await BlacklistServices(accessToken);
        if(isBlackListed)
            return true;
        else {
            const newBlacklist = new Blacklist({
                token: accessToken,
            });
            await newBlacklist.save();
            return true;
        }
    } catch (error) {
        return false;
    }
}
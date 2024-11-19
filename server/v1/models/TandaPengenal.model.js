import mongoose from "mongoose";
import { Index } from "../controllers/view";

const TandaPengenalSchema = new mongoose.Schema(
    {
        jenis_tanda_pengenal: {
            type: mongoose.ObjectId,
            index: true,
            required: "Jenis tanda pengenal is required",
            ref: "JenisTandaPengenal",
        },
        number: {
            type: String,
            index: true,
            max: 255
        }
    },
    { 
        autoCreate: true,
        autoIndex: true,
        timestamps: true
    }
);

export default mongoose.model("TandaPengenal", TandaPengenalSchema);
import mongoose from "mongoose";

const TandaPengenalSchema = new mongoose.Schema(
    {
        jenis_tanda_pengenal: {
            type: mongoose.ObjectId,
            required: "Jenis tanda pengenal is required",
            ref: "JenisTandaPengenal",
        },
        number: {
            type: String,
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
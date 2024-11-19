import mongoose from "mongoose";

const JenisTandaPengenalSchema = new mongoose.Schema(
    {
        nama: {
            type: String,
            required: "Nama is required",
            max: 225,
        }
    },
    { 
        autoCreate: true,
        autoIndex: true,
        timestamps: true
    }
);

export default mongoose.model("JenisTandaPengenal", JenisTandaPengenalSchema);
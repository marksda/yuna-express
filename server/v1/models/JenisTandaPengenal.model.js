import mongoose from "mongoose";

const JenisTandaPengenalSchema = new mongoose.Schema(
    {
        keterangan: {
            type: String,
            required: "Nama is required",
            max: 225,
        }
    },
    { 
        autoCreate: false,
        autoIndex: false,
        timestamps: true
    }
);

export default mongoose.model("JenisTandaPengenal", JenisTandaPengenalSchema);
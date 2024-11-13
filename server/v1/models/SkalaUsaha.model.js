import mongoose from "mongoose";

const SkalaUsahaSchema = new mongoose.Schema(
    {
        kode: {
            type: String,
            required: "Kode is required",
            unique: true,
        },
        nama: {
            type: String,
            required: "Nama is required",
            max: 225,
        },
        singkatan: {
            type: String,
            required: "Singkatan is required",
            max: 225,
        }
    },
    { 
        autoCreate: false,
        autoIndex: false,
        timestamps: true 
    }
);

export default mongoose.model("SkalaUsaha", SkalaUsahaSchema);
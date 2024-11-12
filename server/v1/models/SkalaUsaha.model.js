import mongoose from "mongoose";

const SkalaUsahaSchema = new mongoose.Schema(
    {
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
    { timestamps: true }
);

export default mongoose.model("SkalaUsaha", SkalaUsahaSchema);
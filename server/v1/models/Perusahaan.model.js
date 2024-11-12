import mongoose from "mongoose";

const PerusahaanSchema = new mongoose.Schema(
    {
        npwp: {
            type: String,
            required: "Npwp is required",
            unique: true,
        },
        nama: {
            type: String,
            required: "Nama is required",
            max: 225,
        },
        model_perizinan: {
            type: String, 
            index: true,
            ref: "ModelPerizinan"
        },
        skala_usaha: {
            type: String, 
            index: true,
            ref: "SkalaUsaha"
        },
        pelaku_usaha: {
            type: String, 
            index: true,
            ref: "PelakuUsaha"
        },
    },
    { timestamps: true }
);

export default mongoose.model("Perusahaan", PerusahaanSchema);
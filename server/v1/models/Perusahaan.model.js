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
            ref: "ModelPerizinan"
        },
        skala_usaha: {
            type: String, 
            ref: "SkalaUsaha"
        },
        pelaku_usaha: {
            type: String, 
            ref: "PelakuUsaha"
        },
        tempat_usaha: [{
            type: mongoose.ObjectId,
            ref: "TempatUsaha"
        }]
    },
    { 
        autoCreate: true,
        autoIndex: true,
        timestamps: true 
    }
);

export default mongoose.model("Perusahaan", PerusahaanSchema);
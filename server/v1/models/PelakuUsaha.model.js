import mongoose from "mongoose";

const PelakuUsahaSchema = new mongoose.Schema(
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
            required: "Nama is required",
            max: 25,
        },
        kategori_pelaku_usaha: {
            type: String, 
            index: true,
            ref: "KategoriPelakuUsha"
        }
    },
    { 
        autoCreate: false,
        autoIndex: false,
        timestamps: true 
    }
);

export default mongoose.model("PelakuUsaha", PelakuUsahaSchema);
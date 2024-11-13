import mongoose from "mongoose";

const KategoriPelakuUsahaSchema = new mongoose.Schema(
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
        skala_usaha: {
            type: String,
            ref: "SkalaUsaha"
        }
    },
    { 
        autoCreate: false,
        autoIndex: false,
        timestamps: true 
    }
);

export default mongoose.model("KategoriPelakuUsaha", KategoriPelakuUsahaSchema);
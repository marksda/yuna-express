import mongoose from "mongoose";

const DesaSchema = new mongoose.Schema(
    {
        kode: {
            type: String,
            required: "Kode is required",
            unique: true,
        },
        nama: {
            type: String,
            required: "Title is required",
            max: 225,
        },
        propinsi: {
            type: String, 
            index: true,
            ref: "Propinsi"
        },
        kabupaten: {
            type: String, 
            index: true,
            ref: "Kabupaten"
        },
        kecamatan: {
            type: String, 
            index: true,
            ref: "Kecamatan"
        }
    },
    { timestamps: true }
);

export default mongoose.model("Desa", DesaSchema);
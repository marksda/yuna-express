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
            ref: "Propinsi"
        },
        kabupaten: {
            type: String, 
            ref: "Kabupaten"
        },
        kecamatan: {
            type: String, 
            index: true,
            ref: "Kecamatan"
        }
    },
    { 
        autoCreate: false,
        autoIndex: false,
        timestamps: true 
    }
);

export default mongoose.model("Desa", DesaSchema);
import mongoose from "mongoose";

const KecamatanSchema = new mongoose.Schema(
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
            index: true,
            ref: "Kabupaten"
        }
    },
    { 
        autoCreate: false,
        autoIndex: false,
        timestamps: true 
    }
);

export default mongoose.model("Kecamatan", KecamatanSchema);
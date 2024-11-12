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
            type: mongoose.Types.ObjectId, 
            index: true,
            ref: "Propinsi"
        },
        kabupaten: {
            type: mongoose.Types.ObjectId, 
            index: true,
            ref: "Kabupaten"
        }
    },
    { timestamps: true }
);

export default mongoose.model("Kecamatan", KecamatanSchema);
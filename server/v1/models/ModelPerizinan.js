import mongoose from "mongoose";

const ModelPerizinanSchema = new mongoose.Schema(
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

export default mongoose.model("ModelPerizinan", ModelPerizinanSchema);
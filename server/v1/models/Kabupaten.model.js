import mongoose from "mongoose";

const KabupatenSchema = new mongoose.Schema(
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
        propinsi: {type: mongoose.Types.ObjectId, ref: "Propinsi"}
    },
    { timestamps: true }
);

export default mongoose.model("Kabupaten", KabupatenSchema);
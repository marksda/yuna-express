import mongoose from "mongoose";

const PropinsiSchema = new mongoose.Schema(
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
        }
    },
    { 
        autoCreate: false,
        autoIndex: false,
        timestamps: true 
    }
);

export default mongoose.model("Propinsi", PropinsiSchema);
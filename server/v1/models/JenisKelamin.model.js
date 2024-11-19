import mongoose from "mongoose";

const JenisKelaminSchema = new mongoose.Schema(
    {
        keterangan: {
            type: String,
            required: "Keterangan is required"
        }
    },
    { 
        autoCreate: false,
        autoIndex: false,
        timestamps: true
    }
);

export default mongoose.model("JenisKelamin", JenisKelaminSchema);
import mongoose from "mongoose";

const JenisTempatUsahaSchema = new mongoose.Schema(
    {
        keterangan: {
            type: String,
            required: "Keterangan is required"
        }
    },
    { 
        autoCreate: true,
        autoIndex: true,
        timestamps: true
    }
);

export default mongoose.model("JenisTempatUsaha", JenisTempatUsahaSchema);
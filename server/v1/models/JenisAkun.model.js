import mongoose from "mongoose";

const JenisRekeningAkuntansiSchema = new mongoose.Schema(
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

export default mongoose.model("JenisRekeningAkuntansi", JenisRekeningAkuntansiSchema);
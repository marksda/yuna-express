import mongoose from "mongoose";

const JenisRekeningAkuntansiSchema = new mongoose.Schema(
    {
        nama: {
            type: String,
            required: "nama is required"
        },
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

export default mongoose.model("JenisRekeningAkuntansi", JenisRekeningAkuntansiSchema);
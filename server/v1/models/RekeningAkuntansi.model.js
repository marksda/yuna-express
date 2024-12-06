import mongoose from "mongoose";

const RekeningAkuntansiSchema = new mongoose.Schema(
    {
        kode: {
            type: String,
            required: "kode is required"
        },
        nama: {
            type: String,
            required: "nama is required"
        },
        header: {
            type: Boolean,
            require: "Header is required"
        },
        level: {
            type: Number,
            require: "Level is required" 
        },
        id_jns_rek_akun: {
            type: String, 
            required: "Id jenis rekening akuntansi is required"
        },
        id_perusahaan: {
            type: String,
            required: "Id perusahaan is required"
        },
        urutan: {
            type: String,
            required: "urutan is required"
        },
        id_parent: {
            type: String
        }
    },
    { 
        autoCreate: false,
        autoIndex: false,
        timestamps: true
    }
);

export default mongoose.model("RekeningAkuntansi", RekeningAkuntansiSchema);
import mongoose from "mongoose";


const PersonSchema = new mongoose.Schema(
    {
        tanda_pengenal: [{type: mongoose.ObjectId, ref: "TandaPengenal"}],
        nama: {
            type: String,
            required: "Title is required",
            max: 225,
        },
        tanggal_lahir: {
            type: Date,
            required: "Tanggal lahir is required",
        },
        jenis_kelamin: {
            type: mongoose.ObjectId,
            ref: "JenisKelamin"
        },
        agama: {
            type: mongoose.ObjectId,
            required: "Agama is required",
            ref: "Agama"
        },
        alamat: {
            propinsi: {
                type: mongoose.ObjectId, 
                required: "Propinsi is required",
                ref: "Propinsi"
            },
            kabupaten: {
                type: mongoose.ObjectId, 
                required: "Kabupaten is required",
                ref: "Kabupaten"
            },
            kecamatan: {
                type: mongoose.ObjectId, 
                required: "Kecamatan is required",
                ref: "Kabupaten"
            },
            desa: {
                type: mongoose.ObjectId,
                required: "Desa is required", 
                ref: "Desa"
            },
            detail: {
                type: String,
                required: "Detail is required",
                max: 225,
            }
        },
        kontak: {
            telepon: {
                type: String,
                required: "telepon is required"
            },
            email: {
                type: String,
                required: "Your email is required",
                lowercase: true,
                trim: true,
            }
        },
        status_verifikasi: {
            type: Boolean,
            default: false
        }
    },
    { 
        autoCreate: true,
        autoIndex: true,
        timestamps: true
    }
);

export default mongoose.model("Person", PersonSchema);
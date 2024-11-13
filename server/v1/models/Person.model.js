import mongoose from "mongoose";

const TandaPengenalSchema = new mongoose.Schema(
    {
        jenis_pengenal: {
            type: String,
            ref: "JenisTandaPengenal"
        },
        nomor: {
            type: String,
            required: "Title is required",
            max: 225,
        }
    }
);
const TandaPengenal = mongoose.model("TandaPengenal", TandaPengenalSchema);

const PersonSchema = new mongoose.Schema(
    {
        tanda_pengenal: [TandaPengenal],
        nama: {
            type: String,
            required: "Title is required",
            max: 225,
        },
        tanggal_lahir: {
            type: Date
        },
        jenis_kelamin: {
            type: String,
            ref: "JenisKelamin"
        },
        agama: {
            type: String,
            ref: "Agama"
        },
        alamat: {
            propinsi: {
                type: string, 
                required: "Title is required",
                ref: "Propinsi"
            },
            kabupaten: {
                type: string, 
                required: "Title is required",
                ref: "Kabupaten"
            },
            kecamatan: {
                type: string, 
                required: "Title is required",
                ref: "Kabupaten"
            },
            desa: {
                type: string,
                required: "Title is required", 
                ref: "Desa"
            },
            detail: {
                type: String,
                required: "Title is required",
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
    { timestamps: true }
);

export default mongoose.model("Person", PersonSchema);
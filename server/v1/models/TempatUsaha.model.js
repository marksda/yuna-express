import mongoose from "mongoose";

const TempatUsahaSchema = new mongoose.Schema(
    {
        keterangan: {
            type: String,
            required: "keterangan is required"
        },
        jenis_tempat_usaha: {
            type: mongoose.ObjectId,
            required: "Jenis tempat usaha is required",
            ref: "JenisTempatUsaha"
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
                required: "Detail alamat is required",
                max: 225,
            },
            titik_kordinat: {
                latitude: {
                    type: Number
                },
                longitude: {
                    type: Number
                }
            }
        },
        kontak: {
            telepon: {
                type: String
            },
            email: {
                type: String,
                trim: true
            },
            fax: {
                type: String
            },
            person: {
                type: mongoose.ObjectId,
                ref: "Person"
            }
        },
        id_perusahan: {
            type: mongoose.ObjectId,
            required: "Id perusahaan is required",
            ref: "Perusahaan"
        }
    },
    { 
        autoCreate: true,
        autoIndex: true,
        timestamps: true
    }
);

export default mongoose.model("TempatUsaha", TempatUsahaSchema);
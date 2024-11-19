import mongoose from "mongoose";

const OfficeStoreOutletPerusahaanSchema = new mongoose.Schema(
    {
        keterangan: {
            type: String,
            required: "keterangan is required"
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
        perusahan_id: {
            type: mongoose.ObjectId,
            required: "Id perusahaan is required"
        }
    },
    { 
        autoCreate: true,
        autoIndex: true,
        timestamps: true
    }
);

export default mongoose.model("OfficeStoreOutletPerusahaan", OfficeStoreOutletPerusahaanSchema);
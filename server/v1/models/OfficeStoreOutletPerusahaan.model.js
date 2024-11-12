import mongoose from "mongoose";

const OfficeStoreOutletPerusahaanSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: "keterangan is required",
            unique: true,
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
                unique: true,
                lowercase: true,
                trim: true,
            },
            fax: {
                type: String
            },
            person: {
                type: String
            }
        },
        perusahan_id: {
            type: String,
            required: "Id perusahaan is required"
        }
    },
    { timestamps: true }
);

export default mongoose.model("OfficeStoreOutletPerusahaan", OfficeStoreOutletPerusahaanSchema);
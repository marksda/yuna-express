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
                ref: "Propinsi"
            },
            kabupaten: {
                type: string, 
                ref: "Kabupaten"
            },
            kabupaten: {
                type: string, 
                ref: "Kabupaten"
            },
        },
        model_perizinan: {
            type: String, 
            index: true,
            ref: "ModelPerizinan"
        },
        skala_usaha: {
            type: String, 
            index: true,
            ref: "SkalaUsaha"
        },
        pelaku_usaha: {
            type: String, 
            index: true,
            ref: "PelakuUsaha"
        }
    },
    { timestamps: true }
);

export default mongoose.model("OfficeStoreOutletPerusahaan", OfficeStoreOutletPerusahaanSchema);
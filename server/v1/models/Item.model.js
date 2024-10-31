import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
    {
        kode: {
            type: String,
            required: "Kode is required",
            unique: true,
        },
        title: {
            type: String,
            required: "Title is required",
            max: 225,
        }
    },
    { timestamps: true }
);

export default mongoose.model("Item", ItemSchema);
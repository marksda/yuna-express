import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: "Title is required",
            max: 225,
        }
    },
    { timestamps: true }
);

export default mongoose.model("Item", ItemSchema);
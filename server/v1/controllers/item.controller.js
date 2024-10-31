import Item from "../models/Item.model.js";

export async function AddItem(req, res) {
    const { kode, title } = req.body;

    try {
        const newItem = new Item({
            kode,
            title
        });

        const existingItem = await User.findOne({kode});
        if(existingItem) {
            return res.status(400).json({
                status: "gagal",
                data: [],
                message: "Duplikasi: Item sudah ada."
            });
        }
        const savedItem = await newItem.save();  // save new user into database
        const { ...item_data } = savedItem._doc;
        res.status(200).json({
            status: "sukses",
            data: [item_data],
            message: "Item berhasil ditambahkan.",
        });
    } catch (error) {
        res.status(500).json({
            status: "gagal",
            code: 500,
            data: [],
            message: "server mengalami kegagalan internal"
        });
    }
}
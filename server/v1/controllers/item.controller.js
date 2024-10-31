import Item from "../models/Item.model.js";

export async function AddItem(req, res) {
    const { kode, title } = req.body;

    try {
        const newItem = new Item({
            kode,
            title
        });

        const existingItem = await Item.findOne({kode});
        if(existingItem) {
            return res.status(400).json({
                status: "gagal",
                data: [],
                message: "Duplikasi: Item sudah ada."
            });
        }
        await newItem.save();
        // const savedItem = await newItem.save();  // save new user into database
        // const { kode, title } = savedItem._doc;
        res.status(200).json({
            status: "sukses",
            data: [{kode, title}],
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
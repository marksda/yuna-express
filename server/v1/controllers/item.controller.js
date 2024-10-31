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

export async function GetItem(req, res) {
    // let pageNumber = req.query.filter.pageNumber;
    // let pageSize = req.query.filter.pageSize;
    // let filters = req.query.filter.filters;
    // let sortOrders = req.query.filter.sortOrders;
    // const query = Item.find({ [filters[0].fieldName]: filters[0].value });

    const query = Item.find({});
    query.select('kode title');

    const items = await query.exec();
    if(!items) {
        return res.status(401).json({
            status: "gagal",
            data: [],
            message: "Data tidak ditemukan."
        });
    }

    res.status(200).json({
        status: "sukses",
        data: items,
        message: "Data berhasil ditemukan.",
    });
}
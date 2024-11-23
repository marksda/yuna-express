import SkalaUsaha from "../models/SkalaUsaha.model.js";

export async function AddSkalaUsaha(req, res) {
    const { kode, nama, singkatan } = req.body;

    try {
        const newSkalaUsaha = new SkalaUsaha({
            kode,
            nama,
            singkatan
        });

        const existingSkalaUsaha = await SkalaUsaha.findOne({kode});
        
        if(existingSkalaUsaha) {
            return res.status(400).json({
                status: "gagal",
                data: [],
                message: "Duplikasi: SkalaUsaha sudah ada."
            });
        }

        const savedSkalaUsaha = await newSkalaUsaha.save();
        const {createdAt, updatedAt, __v, ...hasil} = savedSkalaUsaha._doc;
        
        res.status(200).json({
            status: "sukses",
            data: hasil,
            message: "SkalaUsaha berhasil ditambahkan.",
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

export async function GetSkalaUsaha(req, res) {
    // let pageNumber = req.query.filter.pageNumber;
    // let pageSize = req.query.filter.pageSize;
    // let filters = req.query.filter.filters;
    // let sortOrders = req.query.filter.sortOrders;
    // const query = SkalaUsaha.find({ [filters[0].fieldName]: filters[0].value });

    let filter = {};

    // let filter = {
    //     $and: [
    //         {kode: '1101020'},
    //         {propinsi:'6731733405e5826b4e416a89'}
    //     ]
    // };

    const items = await SkalaUsaha
                    .find(filter)
                    .select('kode nama singkatan')
                    .exec();
    
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
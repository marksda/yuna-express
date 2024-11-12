import SkalaUsaha from "../models/SkalaUsaha.model.js";

export async function AddSkalaUsaha(req, res) {
    const { nama, singkatan } = req.body;

    try {
        const newSkalaUsaha = new SkalaUsaha({
            nama,
            singkatan
        });

        // const existingSkalaUsaha = await SkalaUsaha.find({nama});
        
        // if(existingSkalaUsaha) {
        //     return res.status(400).json({
        //         status: "gagal",
        //         data: [],
        //         message: "Duplikasi: SkalaUsaha sudah ada."
        //     });
        // }

        await newSkalaUsaha.save();
        
        res.status(200).json({
            status: "sukses",
            data: [{nama, singkatan}],
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
                    .select('nama singkatan')
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
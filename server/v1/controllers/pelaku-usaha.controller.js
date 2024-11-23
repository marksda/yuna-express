import PelakuUsaha from "../models/PelakuUsaha.model.js";

export async function AddPelakuUsaha(req, res) {
    const { kode, nama, singkatan, kategori_pelaku_usaha } = req.body;

    try {
        const newPelakuUsaha = new PelakuUsaha({
            kode,
            nama,
            singkatan,
            kategori_pelaku_usaha
        });

        const existingPelakuUsaha = await PelakuUsaha.findOne({kode});
        
        if(existingPelakuUsaha) {
            return res.status(400).json({
                status: "gagal",
                data: [],
                message: "Duplikasi: PelakuUsaha sudah ada."
            });
        }

        const savedPelakuUsaha = await newPelakuUsaha.save();
        const {createdAt, updatedAt, __v, ...hasil} = savedPelakuUsaha._doc;
        
        res.status(200).json({
            status: "sukses",
            data: hasil,
            message: "PelakuUsaha berhasil ditambahkan.",
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

export async function GetPelakuUsaha(req, res) {
    // let pageNumber = req.query.filter.pageNumber;
    // let pageSize = req.query.filter.pageSize;
    // let filters = req.query.filter.filters;
    // let sortOrders = req.query.filter.sortOrders;
    // const query = PelakuUsaha.find({ [filters[0].fieldName]: filters[0].value });

    let filter = {};

    // let filter = {
    //     $and: [
    //         {kode: '1101020'},
    //         {propinsi:'6731733405e5826b4e416a89'}
    //     ]
    // };

    const items = await PelakuUsaha
                    .find(filter)
                    .select('kode nama sinkatan kategori_pelaku_usaha')
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
import KategoriPelakuUsaha from "../models/KategoriPelakuUsaha.model.js";

export async function AddKategoriPelakuUsaha(req, res) {
    const { kode, nama, skala_usaha } = req.body;

    try {
        const newKategoriPelakuUsaha = new KategoriPelakuUsaha({
            kode,
            nama,
            skala_usaha
        });

        const existingKategoriPelakuUsaha = await KategoriPelakuUsaha.findOne({kode});
        
        if(existingKategoriPelakuUsaha) {
            return res.status(400).json({
                status: "gagal",
                data: [],
                message: "Duplikasi: KategoriPelakuUsaha sudah ada."
            });
        }

        await newKategoriPelakuUsaha.save();
        
        res.status(200).json({
            status: "sukses",
            data: [{kode, nama, skala_usaha}],
            message: "KategoriPelakuUsaha berhasil ditambahkan.",
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

export async function GetKategoriPelakuUsaha(req, res) {
    // let pageNumber = req.query.filter.pageNumber;
    // let pageSize = req.query.filter.pageSize;
    // let filters = req.query.filter.filters;
    // let sortOrders = req.query.filter.sortOrders;
    // const query = KategoriPelakuUsaha.find({ [filters[0].fieldName]: filters[0].value });

    let filter = {};

    // let filter = {
    //     $and: [
    //         {kode: '1101020'},
    //         {propinsi:'6731733405e5826b4e416a89'}
    //     ]
    // };

    const items = await KategoriPelakuUsaha
                    .find(filter)
                    .select('kode nama skala_usaha')
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
import Kecamatan from "../models/Kecamatan.model.js";

export async function AddKecamatan(req, res) {
    const { kode, nama, propinsi, kabupaten } = req.body;

    try {
        const newKecamatan = new Kecamatan({
            kode,
            nama,
            propinsi,
            kabupaten
        });

        const existingKecamatan = await Kecamatan.findOne({kode});
        
        if(existingKecamatan) {
            return res.status(400).json({
                status: "gagal",
                data: [],
                message: "Duplikasi: Kecamatan sudah ada."
            });
        }

        await newKecamatan.save();
        
        res.status(200).json({
            status: "sukses",
            data: [{kode, nama}],
            message: "Kecamatan berhasil ditambahkan.",
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

export async function GetKecamatan(req, res) {
    // let pageNumber = req.query.filter.pageNumber;
    // let pageSize = req.query.filter.pageSize;
    // let filters = req.query.filter.filters;
    // let sortOrders = req.query.filter.sortOrders;
    // const query = Kecamatan.find({ [filters[0].fieldName]: filters[0].value });

    const query = Kecamatan.find({});
    // const query = Kecamatan.find({}).populate("propinsi kabupaten");
    query.select('kode nama propinsi kabupaten');

    const items = await query
                    // .where('kabupaten').equals('6731733405e5826b4e416a8a')
                    .exec();
    
    if(!items) {
        return res.status(401).json({
            status: "gagal",
            data: [],
            message: "Data tidak ditemukan."
        });
    }

    // const items = await Kecamatan
    //             .find({})
    //             .select('kode title')
    //             .exec();

    res.status(200).json({
        status: "sukses",
        data: items,
        message: "Data berhasil ditemukan.",
    });
}
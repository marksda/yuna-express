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

    let filter = {};

    // let filter = {
    //     $and: [
    //         {kode: '1101020'},
    //         {propinsi:'6731733405e5826b4e416a89'}
    //     ]
    // };

    const items = await Kecamatan
                    .find(filter)
                    .select('kode nama propinsi kabupaten')
                    .populate('propinsi kabupaten')
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
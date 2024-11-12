import Kabupaten from "../models/Kabupaten.model.js";

export async function AddKabupaten(req, res) {
    const { kode, nama, propinsi } = req.body;

    try {
        const newKabupaten = new Kabupaten({
            kode,
            nama,
            propinsi
        });

        const existingKabupaten = await Kabupaten.findOne({kode});
        
        if(existingKabupaten) {
            return res.status(400).json({
                status: "gagal",
                data: [],
                message: "Duplikasi: Kabupaten sudah ada."
            });
        }

        await newKabupaten.save();
        
        res.status(200).json({
            status: "sukses",
            data: [{kode, nama, propinsi}],
            message: "Kabupaten berhasil ditambahkan.",
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

export async function GetKabupaten(req, res) {
    // let pageNumber = req.query.filter.pageNumber;
    // let pageSize = req.query.filter.pageSize;
    // let filters = req.query.filter.filters;
    // let sortOrders = req.query.filter.sortOrders;
    // const query = Kabupaten.find({ [filters[0].fieldName]: filters[0].value });

    let filter = {};

    // let filter = {
    //     $and: [
    //         {kode: '1101020'},
    //         {propinsi:'6731733405e5826b4e416a89'}
    //     ]
    // };

    const items = await Kabupaten
                    .find(filter)
                    .select('kode nama propinsi')
                    .populate('propinsi')
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
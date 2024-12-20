import Desa from "../models/Desa.model.js";

export async function AddDesa(req, res) {
    const { kode, nama, propinsi, kabupaten, kecamatan } = req.body;

    try {
        const newDesa = new Desa({
            kode,
            nama,
            propinsi,
            kabupaten,
            kecamatan
        });

        const existingDesa = await Desa.findOne({kode});
        
        if(existingDesa) {
            return res.status(400).json({
                status: "gagal",
                data: [],
                message: "Duplikasi: Desa sudah ada."
            });
        }

        const savedDesa = await newDesa.save();
        const {createdAt, updatedAt, __v, ...hasil} = savedDesa._doc;
        
        res.status(200).json({
            status: "sukses",
            data: hasil,
            message: "Desa berhasil ditambahkan.",
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

export async function GetDesa(req, res) {
    // let pageNumber = req.query.filter.pageNumber;
    // let pageSize = req.query.filter.pageSize;
    // let filters = req.query.filter.filters;
    // let sortOrders = req.query.filter.sortOrders;
    // const query = Desa.find({ [filters[0].fieldName]: filters[0].value });    

    let filter = {};

    // let filter = {
    //     $and: [
    //         {kode: '1101020'},
    //         {propinsi:'6731733405e5826b4e416a89'}
    //     ]
    // };

    const items = await Desa
                    .find(filter)
                    .select('kode nama propinsi kabupaten kecamatan')
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
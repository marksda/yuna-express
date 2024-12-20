import ModelPerizinan from "../models/ModelPerizinan.model.js";

export async function AddModelPerizinan(req, res) {
    const { nama, singkatan } = req.body;

    try {
        const newModelPerizinan = new ModelPerizinan({
            nama,
            singkatan
        });

        const existingModelPerizinan = await ModelPerizinan.findOne({nama});
        
        if(existingModelPerizinan) {
            return res.status(400).json({
                status: "gagal",
                data: [],
                message: "Duplikasi: ModelPerizinan sudah ada."
            });
        }

        const savedModelPerizinan = await newModelPerizinan.save();
        const {createdAt, updatedAt, __v, ...hasil} = savedModelPerizinan._doc;
        
        res.status(200).json({
            status: "sukses",
            data: hasil,
            message: "ModelPerizinan berhasil ditambahkan.",
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

export async function GetModelPerizinan(req, res) {
    // let pageNumber = req.query.filter.pageNumber;
    // let pageSize = req.query.filter.pageSize;
    // let filters = req.query.filter.filters;
    // let sortOrders = req.query.filter.sortOrders;
    // const query = ModelPerizinan.find({ [filters[0].fieldName]: filters[0].value });

    let filter = {};

    // let filter = {
    //     $and: [
    //         {kode: '1101020'},
    //         {propinsi:'6731733405e5826b4e416a89'}
    //     ]
    // };

    const items = await ModelPerizinan
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
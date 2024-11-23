import TandaPengenal from "../models/TandaPengenal.model.js";

export async function AddTandaPengenal(req, res) {
    const { jenis_tanda_pengenal, number } = req.body;

    try {
        const newTandaPengenal = new TandaPengenal({
            jenis_tanda_pengenal, number
        });

        const existingTandaPengenal = await TandaPengenal.findOne({jenis_tanda_pengenal, number});
        
        if(existingTandaPengenal) {
            return res.status(400).json({
                status: "gagal",
                data: [],
                message: "Duplikasi: TandaPengenal sudah ada."
            });
        }

        const savedTandaPengenal = await newTandaPengenal.save();
        const {createdAt, updatedAt, __v, ...hasil} = savedTandaPengenal._doc;
        
        res.status(200).json({
            status: "sukses",
            data: hasil,
            message: "TandaPengenal berhasil ditambahkan.",
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

export async function GetTandaPengenal(req, res) {
    // let pageNumber = req.query.filter.pageNumber;
    // let pageSize = req.query.filter.pageSize;
    // let filters = req.query.filter.filters;
    // let sortOrders = req.query.filter.sortOrders;
    // const query = Desa.find({ [filters[0].fieldName]: filters[0].value });    

    let filter = {};
    // let filter = {
    //     $and: [
    //         {jenis_tanda_pengenal: '1101020'},
    //         {number:'6731733405e5826b4e416a89'}
    //     ]
    // };

    const items = await TandaPengenal
                    .find(filter)
                    .select('keterangan')
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
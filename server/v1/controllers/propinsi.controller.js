import escapeStringRegexp from "escape-string-regexp";
import Propinsi from "../models/Propinsi.model.js";

export async function AddPropinsi(req, res) {
    const { kode, nama } = req.body;

    try {
        const newPropinsi = new Propinsi({
            kode,
            nama
        });

        const existingPropinsi = await Propinsi.findOne({kode});
        
        if(existingPropinsi) {
            return res.status(400).json({
                status: "gagal",
                data: [],
                message: "Duplikasi: Propinsi sudah ada."
            });
        }

        const savedPropinsi = await newPropinsi.save();
        const {createdAt, updatedAt, __v, ...hasil} = savedPropinsi._doc;
        
        res.status(200).json({
            status: "sukses",
            data: hasil,
            message: "Propinsi berhasil ditambahkan.",
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

export async function GetPropinsi(req, res) {
    // let pageNumber = req.query.filter.pageNumber;
    // let pageSize = req.query.filter.pageSize;
    // let filters = req.query.filter.filters;
    // let sortOrders = req.query.filter.sortOrders;
    // const query = Propinsi.find({ [filters[0].fieldName]: filters[0].value });

    // let filter = {};

    const $regex = RegExp(escapeStringRegexp('jawa ti'), 'i');
    let filter = {
        nama: {
            $regex
        }
        // $and: [
        //     {kode: '1101020'},
        //     {propinsi:'6731733405e5826b4e416a89'}
        // ]
    };

    const items = await Propinsi
                    .find(filter)
                    .select('kode nama')
                    .exec();
    
    if(!items) {
        return res.status(401).json({
            status: "gagal",
            data: [],
            message: "Data tidak ditemukan."
        });
    }

    // const items = await Propinsi
    //             .find({})
    //             .select('kode title')
    //             .exec();

    res.status(200).json({
        status: "sukses",
        data: items,
        message: "Data berhasil ditemukan.",
    });
}
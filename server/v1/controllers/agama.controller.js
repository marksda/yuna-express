import Agama from "../models/Agama.model.js";

export async function AddAgama(req, res) {
    const { keterangan } = req.body;

    try {
        const newAgama = new Agama({
            keterangan
        });

        const existingAgama = await Agama.findOne({keterangan});
        
        if(existingAgama) {
            return res.status(400).json({
                status: "gagal",
                data: [],
                message: "Duplikasi: Agama sudah ada."
            });
        }

        const savedAgama = await newAgama.save();
        // const { _id, ...hasil } = savedAgama._doc;
        
        res.status(200).json({
            status: "sukses",
            data: {_id: savedAgama._id, keterangan},
            message: "Agama berhasil ditambahkan.",
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

export async function GetAgama(req, res) {
    let filter = {};

    const items = await Agama
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
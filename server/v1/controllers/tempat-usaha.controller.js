import TempatUsaha from "../models/TempatUsaha.model.js";

export async function AddTempatUsaha(req, res) {
    const { keterangan, jenis_tempat_usaha, alamat, kontak, id_perusahan } = req.body;

    try {
        const newTempatUsaha = new TempatUsaha({
            keterangan, jenis_tempat_usaha, alamat, kontak, id_perusahan
        });

        // const existingTempatUsaha = await TempatUsaha.findOne({keterangan});
        
        // if(existingTempatUsaha) {
        //     return res.status(400).json({
        //         status: "gagal",
        //         data: [],
        //         message: "Duplikasi: TempatUsaha sudah ada."
        //     });
        // }

        await newTempatUsaha.save();
        
        res.status(200).json({
            status: "sukses",
            data: [{keterangan}],
            message: "Tempat usaha berhasil ditambahkan.",
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

export async function GetTempatUsaha(req, res) {
    let filter = {};

    const items = await TempatUsaha
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
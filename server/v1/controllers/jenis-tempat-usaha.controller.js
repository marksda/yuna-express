import JenisTempatUsaha from "../models/JenisTempatUsaha.model.js";

export async function AddJenisTempatUsaha(req, res) {
    const { keterangan } = req.body;

    try {
        let newJenisTempatUsaha = new JenisTempatUsaha({
            keterangan
        });

        const existingJenisTempatUsaha = await JenisTempatUsaha.findOne({keterangan});
        
        if(existingJenisTempatUsaha) {
            return res.status(400).json({
                status: "gagal",
                data: [],
                message: "Duplikasi: Jenis tempat usaha sudah ada."
            });
        }

        newJenisTempatUsaha = await newJenisTempatUsaha.save();
        
        res.status(200).json({
            status: "sukses",
            data: newJenisTempatUsaha,
            message: "Jenis tempat usaha berhasil ditambahkan.",
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

export async function GetJenisTempatUsaha(req, res) {
    let filter = {};

    const items = await JenisTempatUsaha
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
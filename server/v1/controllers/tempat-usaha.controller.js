import TempatUsaha from "../models/TempatUsaha.model.js";

export async function AddTempatUsaha(req, res) {
    const { keterangan, jenis_tempat_usaha, alamat, kontak, id_perusahan } = req.body;

    try {
        const newTempatUsaha = new TempatUsaha({
            keterangan, jenis_tempat_usaha, alamat, kontak, id_perusahan
        });

        const existingTempatUsaha = await TempatUsaha.findOne({keterangan, id_perusahan});
        
        if(existingTempatUsaha) {
            return res.status(400).json({
                status: "gagal",
                data: [],
                message: "Duplikasi: TempatUsaha sudah ada."
            });
        }

        const savedTempatUsaha = await newTempatUsaha.save();
        const {createdAt, updatedAt, __v, ...hasil} = savedTempatUsaha._doc;
        
        res.status(200).json({
            status: "sukses",
            data: hasil,
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
                    .populate({
                        path: 'jenis_tempat_usaha',
                        select: 'keterangan'
                    })
                    .populate({
                        path: 'alamat.propinsi',
                        select: 'nama'
                    })
                    .populate({
                        path: 'alamat.kabupaten',
                        select: 'nama'
                    })
                    .populate({
                        path: 'alamat.kecamatan',
                        select: 'nama'
                    })
                    .populate({
                        path: 'alamat.desa',
                        select: 'nama'
                    })
                    .populate({
                        path: 'kontak.person',
                        select: 'nama kontak'
                    })
                    .select('keterangan jenis_tempat_usaha alamat kontak')
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
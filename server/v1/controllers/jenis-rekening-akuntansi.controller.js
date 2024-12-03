import JenisRekeningAkuntansi from "../models/JenisRekeningAkuntansi.model.js";

export async function AddJenisRekeningAkuntansi(req, res) {
    const { keterangan } = req.body;

    try {
        const newJenisRekeningAkuntansi = new JenisRekeningAkuntansi({
            keterangan
        });

        const existingJenisRekeningAkuntansi = await JenisRekeningAkuntansi.findOne({keterangan});
        
        if(existingJenisRekeningAkuntansi) {
            return res.status(400).json({
                status: "gagal",
                data: [],
                message: "Duplikasi: JenisRekeningAkuntansi sudah ada."
            });
        }

        const savedJenisRekeningAkuntansi = await newJenisRekeningAkuntansi.save();
        const {createdAt, updatedAt, __v, ...hasil} = savedJenisRekeningAkuntansi._doc;
        
        res.status(200).json({
            status: "sukses",
            data: hasil,
            message: "JenisRekeningAkuntansi berhasil ditambahkan.",
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

export async function GetJenisRekeningAkuntansi(req, res) {
    let filter = {};

    const items = await JenisRekeningAkuntansi
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
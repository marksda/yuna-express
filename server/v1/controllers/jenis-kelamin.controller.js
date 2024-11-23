import JenisKelamin from "../models/JenisKelamin.model.js";

export async function AddJenisKelamin(req, res) {
    const { keterangan } = req.body;

    try {
        const newJenisKelamin = new JenisKelamin({
            keterangan
        });

        const existingJenisKelamin = await JenisKelamin.findOne({keterangan});
        
        if(existingJenisKelamin) {
            return res.status(400).json({
                status: "gagal",
                data: [],
                message: "Duplikasi: JenisKelamin sudah ada."
            });
        }

        const savedJenisKelamin = await newJenisKelamin.save();
        
        res.status(200).json({
            status: "sukses",
            data: {_id: savedJenisKelamin._id, keterangan},
            message: "JenisKelamin berhasil ditambahkan.",
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

export async function GetJenisKelamin(req, res) {
    let filter = {};

    const items = await JenisKelamin
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
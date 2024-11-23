import JenisTandaPengenal from "../models/JenisTandaPengenal.model.js";

export async function AddJenisTandaPengenal(req, res) {
    const { keterangan } = req.body;

    try {
        let newJenisTandaPengenal = new JenisTandaPengenal({
            keterangan
        });

        const existingJenisTandaPengenal = await JenisTandaPengenal.findOne({keterangan});
        
        if(existingJenisTandaPengenal) {
            return res.status(400).json({
                status: "gagal",
                data: [],
                message: "Duplikasi: JenisTandaPengenal sudah ada."
            });
        }

        newJenisTandaPengenal = await newJenisTandaPengenal.save();
        
        res.status(200).json({
            status: "sukses",
            data: newJenisTandaPengenal,
            message: "JenisTandaPengenal berhasil ditambahkan.",
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

export async function GetJenisTandaPengenal(req, res) {
    let filter = {};

    const items = await JenisTandaPengenal
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